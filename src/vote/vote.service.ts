import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateVoteInput } from './dto/create-vote.input';
import { UpdateVoteInput } from './dto/update-vote.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vote } from 'prisma/vote/vote.model';
import { pubSub } from 'src/common/pubsub';

@Injectable()
export class VoteService {
  constructor(private readonly prismaService: PrismaService) { }

  async createVote(userId: string, createVoteInput: CreateVoteInput): Promise<Vote> {
    const { optionId, pollId } = createVoteInput;

    // Find the poll and check if it exists
    const poll = await this.prismaService.poll.findUnique({
      where: { id: pollId },
      include: { options: true }
    });

    if (!poll) {
      throw new BadRequestException('Poll not found');
    }

    // Check if the option belongs to the poll
    const option = poll.options.find(option => option.id === optionId);
    if (!option) {
      throw new BadRequestException('Option does not belong to the specified poll');
    }

    // Check if the poll is ended
    if (poll.isPollEndedByUser || new Date() > poll.willEndAt) {
      throw new BadRequestException('Poll is already ended or voting time has passed');
    }

    // Check existing vote for the user and poll
    const existingVote = await this.prismaService.vote.findFirst({
      where: { pollId, userId, optionId },
    });

    // Helper function to handle vote update or creation
    const handleVote = async (voteId?: string) => {
      const data = { optionId, userId, pollId };

      if (poll.isMultipleOptions) {
        // Poll supports multiple options
        if (existingVote) {
          if (existingVote.isVoted) {
            throw new BadRequestException('User has already voted for this option');
          }
          // Update existing vote
          return await this.prismaService.vote.update({
            where: { id: existingVote.id },
            data: { isVoted: true },
          });
        }
        // Create new vote
        return await this.prismaService.vote.create({ data });
      } else {
        // Poll does not support multiple options
        if (existingVote) {
          if (existingVote.isVoted) {
            throw new BadRequestException('User has already voted for this poll');
          }
          // Update existing vote
          return await this.prismaService.vote.update({
            where: { id: existingVote.id },
            data: { isVoted: true },
          });
        }
        // Check if user has any other votes for this poll
        const otherVote = await this.prismaService.vote.findFirst({
          where: { pollId, userId, isVoted: true },
        });

        if (otherVote) {
          throw new BadRequestException('User has already voted for this poll');
        }
        // Create new vote
        return await this.prismaService.vote.create({ data });
      }
    };

    const vote = await handleVote(existingVote?.id);  // Ensure to await the result
    const updatedPoll = await this.prismaService.poll.findUnique({
      where: { id: pollId },
      include: {
        options: {
          include: {
            votes: {
              where: { isVoted: true },
              include: { user: true },
            },
            _count: {
              select: { votes: { where: { isVoted: true } } },
            },
          },
        },
      },
    });

    // Publish the updated poll
    pubSub.publish('pollUpdated', { pollUpdated: updatedPoll });
    return vote;
  }

  async updateVote(userId: string, updateVoteInput: UpdateVoteInput) {
    const { voteId, isVoted } = updateVoteInput;

    // Find the vote with associated poll and option
    const vote = await this.prismaService.vote.findUnique({
      where: { id: voteId },
      include: {
        poll: true,
        option: true,
      },
    });

    if (!vote) {
      throw new BadRequestException('Vote not found');
    }

    // Check if the vote belongs to the user
    if (vote.userId !== userId) {
      throw new ForbiddenException('You are not allowed to update this vote');
    }

    const poll = vote.poll;

    // Check if the poll is ended or time has passed
    if (poll.isPollEndedByUser || new Date() > poll.willEndAt) {
      throw new BadRequestException('Poll is closed for voting');
    }

    // If the poll does not allow multiple options, check for existing votes
    if (!poll.isMultipleOptions) {
      const existingVote = await this.prismaService.vote.findFirst({
        where: {
          pollId: poll.id,
          userId: vote.userId,
          isVoted: true,
        },
      });

      if (existingVote && existingVote.id !== vote.id) {
        throw new BadRequestException('User cannot update vote for this poll');
      }
    }

    // Update the vote's isVoted status
    const updatedVote = await this.prismaService.vote.update({
      where: { id: voteId },
      data: { isVoted },
    });

    const updatedPoll = await this.prismaService.poll.findUnique({
      where: { id: poll.id },
      include: {
        options: {
          include: {
            votes: {
              where: { isVoted: true },
              include: { user: true },
            },
            _count: {
              select: { votes: { where: { isVoted: true } } },
            },
          },
        },
      },
    });

    pubSub.publish('pollUpdated', { pollUpdated: updatedPoll });
    return updatedVote;
  }
}

import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { Poll } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollInput } from './dto/create-poll.input';
import { PaginationInput } from 'src/common/pagination';

@Injectable()
export class PollService {

    constructor(private readonly prismaService: PrismaService) { }

    getPolls(paginationInput: PaginationInput): Promise<Poll[]> {
        const polls = this.prismaService.poll.findMany({
            include: {
                options: {
                    include: {
                        votes: {
                            where: { isVoted: true },
                            include: {
                                user: true,
                            },
                        },
                        _count: {
                            select: { votes: { where: { isVoted: true } } },
                        },
                    },
                },
            },
            take: paginationInput.take,
            skip: paginationInput.skip,
        });
        return polls;
    }

    async getPoll(id: string): Promise<Poll> {
        const poll = await this.prismaService.poll.findUnique({
            where: { id },
            include: {
                options: {
                    include: {
                        votes: {
                            where: { isVoted: true },
                            include: {
                                user: true,
                            },
                        },
                        _count: {
                            select: { votes: { where: { isVoted: true } } },
                        },
                    },
                },
            },
        });
        return poll;
    }

    async createPoll(userId: string, createPollInput: CreatePollInput): Promise<Poll> {
        const now = new Date();
        const willEndAt = new Date(createPollInput.willEndAt);
    
        // Check if willEndAt is at least 10 minutes greater than the current time
        if (willEndAt.getTime() - now.getTime() < 10 * 60 * 1000) {
          throw new BadRequestException('The end time must be at least 10 minutes greater than the current time');
        }
    
        const poll = await this.prismaService.poll.create({
          data: {
            title: createPollInput.title,
            willEndAt: willEndAt.toISOString(),
            isMultipleOptions: createPollInput.isMultipleOptions,
            userId,
            options: {
              createMany: {
                data: createPollInput.options.map(option => ({
                  text: option.text,
                })),
              },
            },
          },
          include: {
            options: true,
          },
        });
    
        return poll;
      }

    async endPoll(userId: string, id: string): Promise<Poll> {
        // Find the poll with related user
        const poll = await this.prismaService.poll.findUnique({
            where: { id },
            include: {
                user: true,
            },
        });

        if (!poll) {
            throw new BadRequestException('Poll not found');
        }

        // Check if the user is the owner of the poll
        if (poll.userId !== userId) {
            throw new ForbiddenException('You are not allowed to end this poll');
        }

        // Check if the poll is already ended by user or time has passed
        if (poll.isPollEndedByUser || new Date() > poll.willEndAt) {
            throw new BadRequestException('Poll is already ended or voting time has passed');
        }

        // Update the poll to mark it as ended by user
        const updatedPoll = await this.prismaService.poll.update({
            where: { id },
            data: { isPollEndedByUser: true }, include: {
                options: {
                    include: {
                        votes: {
                            where: { isVoted: true },
                            include: {
                                user: true,
                            },
                        },
                        _count: {
                            select: { votes: { where: { isVoted: true } } },
                        },
                    },
                },
            },
        });

        return updatedPoll;
    }

}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VoteService } from './vote.service';
import { CreateVoteInput } from './dto/create-vote.input';
import { Vote } from 'prisma/vote/vote.model';
import { UpdateVoteInput } from './dto/update-vote.input';
import { GetUser } from 'src/authentication/get-user.decorator';

@Resolver('Vote')
export class VoteResolver {
  constructor(private readonly voteService: VoteService) {}

  @Mutation(() => Vote, { name: 'createVote' })
  createVote(@GetUser() userId: string, @Args('createVoteInput') createVoteInput: CreateVoteInput) {
    return this.voteService.createVote(userId, createVoteInput);
  }

  @Mutation(() => Vote, { name: 'updateVote' })
  updateVote(@GetUser() userId: string, @Args('updateVoteInput') updateVoteInput: UpdateVoteInput) {
    return this.voteService.updateVote(userId, updateVoteInput);
  }
}

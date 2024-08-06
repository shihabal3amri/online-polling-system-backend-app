import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PollService } from './poll.service';
import { Poll } from 'prisma/poll/poll.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth-guard';
import { GetUser } from 'src/authentication/get-user.decorator';
import { CreatePollInput } from './dto/create-poll.input';
import { PaginationInput } from 'src/common/pagination';
import { pubSub } from 'src/common/pubsub';


@UseGuards(JwtAuthGuard)
@Resolver('Poll')
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Query(() => [Poll], { name: 'getPolls' })
  async getPolls(@Args('paginationInput') paginationInput: PaginationInput): Promise<Poll[]> {
    return this.pollService.getPolls(paginationInput);
  }

  @Query(() => Poll, { name: 'getPoll' })
  async getPoll(@Args('id') id: string): Promise<Poll> {
    return this.pollService.getPoll(id);
  }

  @Mutation(() => Poll, { name: 'createPoll' })
  async createPoll(@GetUser() userId: string, @Args('createPollInput') createPollInput: CreatePollInput): Promise<Poll> {
    return this.pollService.createPoll(userId, createPollInput);
  }

  @Mutation(() => Poll, { name: 'endPoll' })
  async endPoll(@GetUser() userId: string, @Args('id') id: string): Promise<Poll> {
    return this.pollService.endPoll(userId, id);
  }

  @Subscription(returns => Poll, {
    filter: (payload, variables) => variables.pollIds.includes(payload.pollUpdated.id),
    resolve: (payload) => payload.pollUpdated,
  })
  pollUpdated(@Args('pollIds', { type: () => [String] }) pollIds: string[]): AsyncIterator<Poll> {
    return pubSub.asyncIterator('pollUpdated');
  }
}

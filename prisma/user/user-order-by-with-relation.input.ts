import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RefreshTokenOrderByRelationAggregateInput } from '../refresh-token/refresh-token-order-by-relation-aggregate.input';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { PollOrderByRelationAggregateInput } from '../poll/poll-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => RefreshTokenOrderByRelationAggregateInput, {nullable:true})
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;

    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: VoteOrderByRelationAggregateInput;

    @Field(() => PollOrderByRelationAggregateInput, {nullable:true})
    polls?: PollOrderByRelationAggregateInput;
}

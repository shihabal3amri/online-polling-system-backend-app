import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { PollOrderByWithRelationInput } from '../poll/poll-order-by-with-relation.input';

@InputType()
export class OptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pollId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: VoteOrderByRelationAggregateInput;

    @Field(() => PollOrderByWithRelationInput, {nullable:true})
    poll?: PollOrderByWithRelationInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VoteCountOrderByAggregateInput } from './vote-count-order-by-aggregate.input';
import { VoteMaxOrderByAggregateInput } from './vote-max-order-by-aggregate.input';
import { VoteMinOrderByAggregateInput } from './vote-min-order-by-aggregate.input';

@InputType()
export class VoteOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pollId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    optionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isVoted?: keyof typeof SortOrder;

    @Field(() => VoteCountOrderByAggregateInput, {nullable:true})
    _count?: VoteCountOrderByAggregateInput;

    @Field(() => VoteMaxOrderByAggregateInput, {nullable:true})
    _max?: VoteMaxOrderByAggregateInput;

    @Field(() => VoteMinOrderByAggregateInput, {nullable:true})
    _min?: VoteMinOrderByAggregateInput;
}

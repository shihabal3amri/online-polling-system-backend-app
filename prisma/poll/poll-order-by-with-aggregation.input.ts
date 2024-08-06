import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PollCountOrderByAggregateInput } from './poll-count-order-by-aggregate.input';
import { PollMaxOrderByAggregateInput } from './poll-max-order-by-aggregate.input';
import { PollMinOrderByAggregateInput } from './poll-min-order-by-aggregate.input';

@InputType()
export class PollOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPollEndedByUser?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    willEndAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isMultipleOptions?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PollCountOrderByAggregateInput, {nullable:true})
    _count?: PollCountOrderByAggregateInput;

    @Field(() => PollMaxOrderByAggregateInput, {nullable:true})
    _max?: PollMaxOrderByAggregateInput;

    @Field(() => PollMinOrderByAggregateInput, {nullable:true})
    _min?: PollMinOrderByAggregateInput;
}

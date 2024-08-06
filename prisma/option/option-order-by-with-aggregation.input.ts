import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OptionCountOrderByAggregateInput } from './option-count-order-by-aggregate.input';
import { OptionMaxOrderByAggregateInput } from './option-max-order-by-aggregate.input';
import { OptionMinOrderByAggregateInput } from './option-min-order-by-aggregate.input';

@InputType()
export class OptionOrderByWithAggregationInput {

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

    @Field(() => OptionCountOrderByAggregateInput, {nullable:true})
    _count?: OptionCountOrderByAggregateInput;

    @Field(() => OptionMaxOrderByAggregateInput, {nullable:true})
    _max?: OptionMaxOrderByAggregateInput;

    @Field(() => OptionMinOrderByAggregateInput, {nullable:true})
    _min?: OptionMinOrderByAggregateInput;
}

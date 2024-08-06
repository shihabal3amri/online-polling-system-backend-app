import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RefreshTokenCountOrderByAggregateInput } from './refresh-token-count-order-by-aggregate.input';
import { RefreshTokenMaxOrderByAggregateInput } from './refresh-token-max-order-by-aggregate.input';
import { RefreshTokenMinOrderByAggregateInput } from './refresh-token-min-order-by-aggregate.input';

@InputType()
export class RefreshTokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isArchived?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    archivedAt?: SortOrderInput;

    @Field(() => RefreshTokenCountOrderByAggregateInput, {nullable:true})
    _count?: RefreshTokenCountOrderByAggregateInput;

    @Field(() => RefreshTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: RefreshTokenMaxOrderByAggregateInput;

    @Field(() => RefreshTokenMinOrderByAggregateInput, {nullable:true})
    _min?: RefreshTokenMinOrderByAggregateInput;
}

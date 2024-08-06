import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OptionOrderByRelationAggregateInput } from '../option/option-order-by-relation-aggregate.input';
import { VoteOrderByRelationAggregateInput } from '../vote/vote-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class PollOrderByWithRelationInput {

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

    @Field(() => OptionOrderByRelationAggregateInput, {nullable:true})
    options?: OptionOrderByRelationAggregateInput;

    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: VoteOrderByRelationAggregateInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}

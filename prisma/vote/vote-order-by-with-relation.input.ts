import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { PollOrderByWithRelationInput } from '../poll/poll-order-by-with-relation.input';
import { OptionOrderByWithRelationInput } from '../option/option-order-by-with-relation.input';

@InputType()
export class VoteOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => PollOrderByWithRelationInput, {nullable:true})
    poll?: PollOrderByWithRelationInput;

    @Field(() => OptionOrderByWithRelationInput, {nullable:true})
    option?: OptionOrderByWithRelationInput;
}

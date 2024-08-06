import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';
import { Type } from 'class-transformer';
import { VoteOrderByWithRelationInput } from './vote-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VoteCountAggregateInput } from './vote-count-aggregate.input';
import { VoteMinAggregateInput } from './vote-min-aggregate.input';
import { VoteMaxAggregateInput } from './vote-max-aggregate.input';

@ArgsType()
export class VoteAggregateArgs {

    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: VoteWhereInput;

    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;

    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VoteCountAggregateInput, {nullable:true})
    _count?: VoteCountAggregateInput;

    @Field(() => VoteMinAggregateInput, {nullable:true})
    _min?: VoteMinAggregateInput;

    @Field(() => VoteMaxAggregateInput, {nullable:true})
    _max?: VoteMaxAggregateInput;
}

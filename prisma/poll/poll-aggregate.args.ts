import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';
import { PollOrderByWithRelationInput } from './poll-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PollCountAggregateInput } from './poll-count-aggregate.input';
import { PollMinAggregateInput } from './poll-min-aggregate.input';
import { PollMaxAggregateInput } from './poll-max-aggregate.input';

@ArgsType()
export class PollAggregateArgs {

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;

    @Field(() => [PollOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PollOrderByWithRelationInput>;

    @Field(() => PollWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PollCountAggregateInput, {nullable:true})
    _count?: PollCountAggregateInput;

    @Field(() => PollMinAggregateInput, {nullable:true})
    _min?: PollMinAggregateInput;

    @Field(() => PollMaxAggregateInput, {nullable:true})
    _max?: PollMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';
import { Type } from 'class-transformer';
import { VoteOrderByWithAggregationInput } from './vote-order-by-with-aggregation.input';
import { VoteScalarFieldEnum } from './vote-scalar-field.enum';
import { VoteScalarWhereWithAggregatesInput } from './vote-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VoteCountAggregateInput } from './vote-count-aggregate.input';
import { VoteMinAggregateInput } from './vote-min-aggregate.input';
import { VoteMaxAggregateInput } from './vote-max-aggregate.input';

@ArgsType()
export class VoteGroupByArgs {

    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: VoteWhereInput;

    @Field(() => [VoteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithAggregationInput>;

    @Field(() => [VoteScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VoteScalarFieldEnum>;

    @Field(() => VoteScalarWhereWithAggregatesInput, {nullable:true})
    having?: VoteScalarWhereWithAggregatesInput;

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

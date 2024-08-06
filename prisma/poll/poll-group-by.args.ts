import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';
import { PollOrderByWithAggregationInput } from './poll-order-by-with-aggregation.input';
import { PollScalarFieldEnum } from './poll-scalar-field.enum';
import { PollScalarWhereWithAggregatesInput } from './poll-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PollCountAggregateInput } from './poll-count-aggregate.input';
import { PollMinAggregateInput } from './poll-min-aggregate.input';
import { PollMaxAggregateInput } from './poll-max-aggregate.input';

@ArgsType()
export class PollGroupByArgs {

    @Field(() => PollWhereInput, {nullable:true})
    @Type(() => PollWhereInput)
    where?: PollWhereInput;

    @Field(() => [PollOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PollOrderByWithAggregationInput>;

    @Field(() => [PollScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PollScalarFieldEnum>;

    @Field(() => PollScalarWhereWithAggregatesInput, {nullable:true})
    having?: PollScalarWhereWithAggregatesInput;

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

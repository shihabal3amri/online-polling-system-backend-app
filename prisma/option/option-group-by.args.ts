import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { Type } from 'class-transformer';
import { OptionOrderByWithAggregationInput } from './option-order-by-with-aggregation.input';
import { OptionScalarFieldEnum } from './option-scalar-field.enum';
import { OptionScalarWhereWithAggregatesInput } from './option-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OptionCountAggregateInput } from './option-count-aggregate.input';
import { OptionMinAggregateInput } from './option-min-aggregate.input';
import { OptionMaxAggregateInput } from './option-max-aggregate.input';

@ArgsType()
export class OptionGroupByArgs {

    @Field(() => OptionWhereInput, {nullable:true})
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;

    @Field(() => [OptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<OptionOrderByWithAggregationInput>;

    @Field(() => [OptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OptionScalarFieldEnum>;

    @Field(() => OptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: OptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OptionCountAggregateInput, {nullable:true})
    _count?: OptionCountAggregateInput;

    @Field(() => OptionMinAggregateInput, {nullable:true})
    _min?: OptionMinAggregateInput;

    @Field(() => OptionMaxAggregateInput, {nullable:true})
    _max?: OptionMaxAggregateInput;
}

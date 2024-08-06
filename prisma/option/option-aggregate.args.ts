import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { Type } from 'class-transformer';
import { OptionOrderByWithRelationInput } from './option-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OptionCountAggregateInput } from './option-count-aggregate.input';
import { OptionMinAggregateInput } from './option-min-aggregate.input';
import { OptionMaxAggregateInput } from './option-max-aggregate.input';

@ArgsType()
export class OptionAggregateArgs {

    @Field(() => OptionWhereInput, {nullable:true})
    @Type(() => OptionWhereInput)
    where?: OptionWhereInput;

    @Field(() => [OptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OptionOrderByWithRelationInput>;

    @Field(() => OptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

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

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OptionWhereInput } from './option-where.input';
import { Type } from 'class-transformer';
import { OptionOrderByWithRelationInput } from './option-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OptionScalarFieldEnum } from './option-scalar-field.enum';

@ArgsType()
export class FindManyOptionArgs {

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

    @Field(() => [OptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OptionScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteWhereInput } from './vote-where.input';
import { Type } from 'class-transformer';
import { VoteOrderByWithRelationInput } from './vote-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VoteScalarFieldEnum } from './vote-scalar-field.enum';

@ArgsType()
export class FindManyVoteArgs {

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

    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VoteScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PollWhereInput } from './poll-where.input';
import { Type } from 'class-transformer';
import { PollOrderByWithRelationInput } from './poll-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PollScalarFieldEnum } from './poll-scalar-field.enum';

@ArgsType()
export class FindFirstPollOrThrowArgs {

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

    @Field(() => [PollScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PollScalarFieldEnum>;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoteUpdateInput } from './vote-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';

@ArgsType()
export class UpdateOneVoteArgs {

    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    data!: VoteUpdateInput;

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;
}

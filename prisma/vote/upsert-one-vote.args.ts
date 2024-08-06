import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteCreateInput } from './vote-create.input';
import { VoteUpdateInput } from './vote-update.input';

@ArgsType()
export class UpsertOneVoteArgs {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    create!: VoteCreateInput;

    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    update!: VoteUpdateInput;
}

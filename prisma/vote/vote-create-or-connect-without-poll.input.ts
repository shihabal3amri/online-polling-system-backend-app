import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteCreateWithoutPollInput } from './vote-create-without-poll.input';

@InputType()
export class VoteCreateOrConnectWithoutPollInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteCreateWithoutPollInput, {nullable:false})
    @Type(() => VoteCreateWithoutPollInput)
    create!: VoteCreateWithoutPollInput;
}

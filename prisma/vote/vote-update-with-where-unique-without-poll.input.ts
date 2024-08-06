import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { Type } from 'class-transformer';
import { VoteUpdateWithoutPollInput } from './vote-update-without-poll.input';

@InputType()
export class VoteUpdateWithWhereUniqueWithoutPollInput {

    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id'>;

    @Field(() => VoteUpdateWithoutPollInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPollInput)
    data!: VoteUpdateWithoutPollInput;
}

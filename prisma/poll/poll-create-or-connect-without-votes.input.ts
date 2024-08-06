import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';
import { PollCreateWithoutVotesInput } from './poll-create-without-votes.input';

@InputType()
export class PollCreateOrConnectWithoutVotesInput {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollCreateWithoutVotesInput, {nullable:false})
    @Type(() => PollCreateWithoutVotesInput)
    create!: PollCreateWithoutVotesInput;
}

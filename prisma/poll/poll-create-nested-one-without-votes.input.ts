import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateWithoutVotesInput } from './poll-create-without-votes.input';
import { Type } from 'class-transformer';
import { PollCreateOrConnectWithoutVotesInput } from './poll-create-or-connect-without-votes.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';

@InputType()
export class PollCreateNestedOneWithoutVotesInput {

    @Field(() => PollCreateWithoutVotesInput, {nullable:true})
    @Type(() => PollCreateWithoutVotesInput)
    create?: PollCreateWithoutVotesInput;

    @Field(() => PollCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => PollCreateOrConnectWithoutVotesInput)
    connectOrCreate?: PollCreateOrConnectWithoutVotesInput;

    @Field(() => PollWhereUniqueInput, {nullable:true})
    @Type(() => PollWhereUniqueInput)
    connect?: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;
}

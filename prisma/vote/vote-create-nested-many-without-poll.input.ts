import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutPollInput } from './vote-create-without-poll.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutPollInput } from './vote-create-or-connect-without-poll.input';
import { VoteCreateManyPollInputEnvelope } from './vote-create-many-poll-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';

@InputType()
export class VoteCreateNestedManyWithoutPollInput {

    @Field(() => [VoteCreateWithoutPollInput], {nullable:true})
    @Type(() => VoteCreateWithoutPollInput)
    create?: Array<VoteCreateWithoutPollInput>;

    @Field(() => [VoteCreateOrConnectWithoutPollInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPollInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPollInput>;

    @Field(() => VoteCreateManyPollInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPollInputEnvelope)
    createMany?: VoteCreateManyPollInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;
}

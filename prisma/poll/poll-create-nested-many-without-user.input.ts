import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateWithoutUserInput } from './poll-create-without-user.input';
import { Type } from 'class-transformer';
import { PollCreateOrConnectWithoutUserInput } from './poll-create-or-connect-without-user.input';
import { PollCreateManyUserInputEnvelope } from './poll-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';

@InputType()
export class PollCreateNestedManyWithoutUserInput {

    @Field(() => [PollCreateWithoutUserInput], {nullable:true})
    @Type(() => PollCreateWithoutUserInput)
    create?: Array<PollCreateWithoutUserInput>;

    @Field(() => [PollCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PollCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PollCreateOrConnectWithoutUserInput>;

    @Field(() => PollCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PollCreateManyUserInputEnvelope)
    createMany?: PollCreateManyUserInputEnvelope;

    @Field(() => [PollWhereUniqueInput], {nullable:true})
    @Type(() => PollWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PollWhereUniqueInput, 'id'>>;
}

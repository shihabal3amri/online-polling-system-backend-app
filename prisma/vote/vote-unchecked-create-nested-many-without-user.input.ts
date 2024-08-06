import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutUserInput } from './vote-create-without-user.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutUserInput } from './vote-create-or-connect-without-user.input';
import { VoteCreateManyUserInputEnvelope } from './vote-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';

@InputType()
export class VoteUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;

    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;

    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: VoteCreateManyUserInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutOptionInput } from './vote-create-without-option.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutOptionInput } from './vote-create-or-connect-without-option.input';
import { VoteCreateManyOptionInputEnvelope } from './vote-create-many-option-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';

@InputType()
export class VoteUncheckedCreateNestedManyWithoutOptionInput {

    @Field(() => [VoteCreateWithoutOptionInput], {nullable:true})
    @Type(() => VoteCreateWithoutOptionInput)
    create?: Array<VoteCreateWithoutOptionInput>;

    @Field(() => [VoteCreateOrConnectWithoutOptionInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutOptionInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutOptionInput>;

    @Field(() => VoteCreateManyOptionInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyOptionInputEnvelope)
    createMany?: VoteCreateManyOptionInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;
}

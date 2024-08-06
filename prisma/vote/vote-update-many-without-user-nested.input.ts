import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutUserInput } from './vote-create-without-user.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutUserInput } from './vote-create-or-connect-without-user.input';
import { VoteUpsertWithWhereUniqueWithoutUserInput } from './vote-upsert-with-where-unique-without-user.input';
import { VoteCreateManyUserInputEnvelope } from './vote-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { VoteUpdateWithWhereUniqueWithoutUserInput } from './vote-update-with-where-unique-without-user.input';
import { VoteUpdateManyWithWhereWithoutUserInput } from './vote-update-many-with-where-without-user.input';
import { VoteScalarWhereInput } from './vote-scalar-where.input';

@InputType()
export class VoteUpdateManyWithoutUserNestedInput {

    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;

    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;

    @Field(() => [VoteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: VoteCreateManyUserInputEnvelope;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;

    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id'>>;

    @Field(() => [VoteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VoteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

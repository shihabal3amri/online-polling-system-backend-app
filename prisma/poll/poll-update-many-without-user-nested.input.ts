import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateWithoutUserInput } from './poll-create-without-user.input';
import { Type } from 'class-transformer';
import { PollCreateOrConnectWithoutUserInput } from './poll-create-or-connect-without-user.input';
import { PollUpsertWithWhereUniqueWithoutUserInput } from './poll-upsert-with-where-unique-without-user.input';
import { PollCreateManyUserInputEnvelope } from './poll-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { PollUpdateWithWhereUniqueWithoutUserInput } from './poll-update-with-where-unique-without-user.input';
import { PollUpdateManyWithWhereWithoutUserInput } from './poll-update-many-with-where-without-user.input';
import { PollScalarWhereInput } from './poll-scalar-where.input';

@InputType()
export class PollUpdateManyWithoutUserNestedInput {

    @Field(() => [PollCreateWithoutUserInput], {nullable:true})
    @Type(() => PollCreateWithoutUserInput)
    create?: Array<PollCreateWithoutUserInput>;

    @Field(() => [PollCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PollCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PollCreateOrConnectWithoutUserInput>;

    @Field(() => [PollUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PollUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PollUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PollCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PollCreateManyUserInputEnvelope)
    createMany?: PollCreateManyUserInputEnvelope;

    @Field(() => [PollWhereUniqueInput], {nullable:true})
    @Type(() => PollWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PollWhereUniqueInput, 'id'>>;

    @Field(() => [PollWhereUniqueInput], {nullable:true})
    @Type(() => PollWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PollWhereUniqueInput, 'id'>>;

    @Field(() => [PollWhereUniqueInput], {nullable:true})
    @Type(() => PollWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PollWhereUniqueInput, 'id'>>;

    @Field(() => [PollWhereUniqueInput], {nullable:true})
    @Type(() => PollWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PollWhereUniqueInput, 'id'>>;

    @Field(() => [PollUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PollUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PollUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PollUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PollUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PollUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PollScalarWhereInput], {nullable:true})
    @Type(() => PollScalarWhereInput)
    deleteMany?: Array<PollScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutPollInput } from './vote-create-without-poll.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutPollInput } from './vote-create-or-connect-without-poll.input';
import { VoteUpsertWithWhereUniqueWithoutPollInput } from './vote-upsert-with-where-unique-without-poll.input';
import { VoteCreateManyPollInputEnvelope } from './vote-create-many-poll-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { VoteUpdateWithWhereUniqueWithoutPollInput } from './vote-update-with-where-unique-without-poll.input';
import { VoteUpdateManyWithWhereWithoutPollInput } from './vote-update-many-with-where-without-poll.input';
import { VoteScalarWhereInput } from './vote-scalar-where.input';

@InputType()
export class VoteUncheckedUpdateManyWithoutPollNestedInput {

    @Field(() => [VoteCreateWithoutPollInput], {nullable:true})
    @Type(() => VoteCreateWithoutPollInput)
    create?: Array<VoteCreateWithoutPollInput>;

    @Field(() => [VoteCreateOrConnectWithoutPollInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPollInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPollInput>;

    @Field(() => [VoteUpsertWithWhereUniqueWithoutPollInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPollInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPollInput>;

    @Field(() => VoteCreateManyPollInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPollInputEnvelope)
    createMany?: VoteCreateManyPollInputEnvelope;

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

    @Field(() => [VoteUpdateWithWhereUniqueWithoutPollInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPollInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPollInput>;

    @Field(() => [VoteUpdateManyWithWhereWithoutPollInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPollInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPollInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

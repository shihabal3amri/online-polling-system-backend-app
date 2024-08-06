import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateWithoutPollInput } from './option-create-without-poll.input';
import { Type } from 'class-transformer';
import { OptionCreateOrConnectWithoutPollInput } from './option-create-or-connect-without-poll.input';
import { OptionUpsertWithWhereUniqueWithoutPollInput } from './option-upsert-with-where-unique-without-poll.input';
import { OptionCreateManyPollInputEnvelope } from './option-create-many-poll-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { OptionUpdateWithWhereUniqueWithoutPollInput } from './option-update-with-where-unique-without-poll.input';
import { OptionUpdateManyWithWhereWithoutPollInput } from './option-update-many-with-where-without-poll.input';
import { OptionScalarWhereInput } from './option-scalar-where.input';

@InputType()
export class OptionUpdateManyWithoutPollNestedInput {

    @Field(() => [OptionCreateWithoutPollInput], {nullable:true})
    @Type(() => OptionCreateWithoutPollInput)
    create?: Array<OptionCreateWithoutPollInput>;

    @Field(() => [OptionCreateOrConnectWithoutPollInput], {nullable:true})
    @Type(() => OptionCreateOrConnectWithoutPollInput)
    connectOrCreate?: Array<OptionCreateOrConnectWithoutPollInput>;

    @Field(() => [OptionUpsertWithWhereUniqueWithoutPollInput], {nullable:true})
    @Type(() => OptionUpsertWithWhereUniqueWithoutPollInput)
    upsert?: Array<OptionUpsertWithWhereUniqueWithoutPollInput>;

    @Field(() => OptionCreateManyPollInputEnvelope, {nullable:true})
    @Type(() => OptionCreateManyPollInputEnvelope)
    createMany?: OptionCreateManyPollInputEnvelope;

    @Field(() => [OptionWhereUniqueInput], {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OptionWhereUniqueInput, 'id'>>;

    @Field(() => [OptionWhereUniqueInput], {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OptionWhereUniqueInput, 'id'>>;

    @Field(() => [OptionWhereUniqueInput], {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OptionWhereUniqueInput, 'id'>>;

    @Field(() => [OptionWhereUniqueInput], {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OptionWhereUniqueInput, 'id'>>;

    @Field(() => [OptionUpdateWithWhereUniqueWithoutPollInput], {nullable:true})
    @Type(() => OptionUpdateWithWhereUniqueWithoutPollInput)
    update?: Array<OptionUpdateWithWhereUniqueWithoutPollInput>;

    @Field(() => [OptionUpdateManyWithWhereWithoutPollInput], {nullable:true})
    @Type(() => OptionUpdateManyWithWhereWithoutPollInput)
    updateMany?: Array<OptionUpdateManyWithWhereWithoutPollInput>;

    @Field(() => [OptionScalarWhereInput], {nullable:true})
    @Type(() => OptionScalarWhereInput)
    deleteMany?: Array<OptionScalarWhereInput>;
}

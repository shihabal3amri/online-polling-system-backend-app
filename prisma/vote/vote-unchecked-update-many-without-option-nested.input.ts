import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateWithoutOptionInput } from './vote-create-without-option.input';
import { Type } from 'class-transformer';
import { VoteCreateOrConnectWithoutOptionInput } from './vote-create-or-connect-without-option.input';
import { VoteUpsertWithWhereUniqueWithoutOptionInput } from './vote-upsert-with-where-unique-without-option.input';
import { VoteCreateManyOptionInputEnvelope } from './vote-create-many-option-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VoteWhereUniqueInput } from './vote-where-unique.input';
import { VoteUpdateWithWhereUniqueWithoutOptionInput } from './vote-update-with-where-unique-without-option.input';
import { VoteUpdateManyWithWhereWithoutOptionInput } from './vote-update-many-with-where-without-option.input';
import { VoteScalarWhereInput } from './vote-scalar-where.input';

@InputType()
export class VoteUncheckedUpdateManyWithoutOptionNestedInput {

    @Field(() => [VoteCreateWithoutOptionInput], {nullable:true})
    @Type(() => VoteCreateWithoutOptionInput)
    create?: Array<VoteCreateWithoutOptionInput>;

    @Field(() => [VoteCreateOrConnectWithoutOptionInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutOptionInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutOptionInput>;

    @Field(() => [VoteUpsertWithWhereUniqueWithoutOptionInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutOptionInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutOptionInput>;

    @Field(() => VoteCreateManyOptionInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyOptionInputEnvelope)
    createMany?: VoteCreateManyOptionInputEnvelope;

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

    @Field(() => [VoteUpdateWithWhereUniqueWithoutOptionInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutOptionInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutOptionInput>;

    @Field(() => [VoteUpdateManyWithWhereWithoutOptionInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutOptionInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutOptionInput>;

    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

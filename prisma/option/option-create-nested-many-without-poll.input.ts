import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateWithoutPollInput } from './option-create-without-poll.input';
import { Type } from 'class-transformer';
import { OptionCreateOrConnectWithoutPollInput } from './option-create-or-connect-without-poll.input';
import { OptionCreateManyPollInputEnvelope } from './option-create-many-poll-input-envelope.input';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';

@InputType()
export class OptionCreateNestedManyWithoutPollInput {

    @Field(() => [OptionCreateWithoutPollInput], {nullable:true})
    @Type(() => OptionCreateWithoutPollInput)
    create?: Array<OptionCreateWithoutPollInput>;

    @Field(() => [OptionCreateOrConnectWithoutPollInput], {nullable:true})
    @Type(() => OptionCreateOrConnectWithoutPollInput)
    connectOrCreate?: Array<OptionCreateOrConnectWithoutPollInput>;

    @Field(() => OptionCreateManyPollInputEnvelope, {nullable:true})
    @Type(() => OptionCreateManyPollInputEnvelope)
    createMany?: OptionCreateManyPollInputEnvelope;

    @Field(() => [OptionWhereUniqueInput], {nullable:true})
    @Type(() => OptionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OptionWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Type } from 'class-transformer';
import { OptionUpdateWithoutPollInput } from './option-update-without-poll.input';
import { OptionCreateWithoutPollInput } from './option-create-without-poll.input';

@InputType()
export class OptionUpsertWithWhereUniqueWithoutPollInput {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    @Type(() => OptionWhereUniqueInput)
    where!: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

    @Field(() => OptionUpdateWithoutPollInput, {nullable:false})
    @Type(() => OptionUpdateWithoutPollInput)
    update!: OptionUpdateWithoutPollInput;

    @Field(() => OptionCreateWithoutPollInput, {nullable:false})
    @Type(() => OptionCreateWithoutPollInput)
    create!: OptionCreateWithoutPollInput;
}

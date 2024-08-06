import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { OptionWhereUniqueInput } from './option-where-unique.input';
import { Type } from 'class-transformer';
import { OptionUpdateWithoutPollInput } from './option-update-without-poll.input';

@InputType()
export class OptionUpdateWithWhereUniqueWithoutPollInput {

    @Field(() => OptionWhereUniqueInput, {nullable:false})
    @Type(() => OptionWhereUniqueInput)
    where!: Prisma.AtLeast<OptionWhereUniqueInput, 'id'>;

    @Field(() => OptionUpdateWithoutPollInput, {nullable:false})
    @Type(() => OptionUpdateWithoutPollInput)
    data!: OptionUpdateWithoutPollInput;
}

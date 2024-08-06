import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';
import { PollUpdateWithoutUserInput } from './poll-update-without-user.input';

@InputType()
export class PollUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollUpdateWithoutUserInput, {nullable:false})
    @Type(() => PollUpdateWithoutUserInput)
    data!: PollUpdateWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';
import { PollCreateWithoutOptionsInput } from './poll-create-without-options.input';

@InputType()
export class PollCreateOrConnectWithoutOptionsInput {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollCreateWithoutOptionsInput, {nullable:false})
    @Type(() => PollCreateWithoutOptionsInput)
    create!: PollCreateWithoutOptionsInput;
}

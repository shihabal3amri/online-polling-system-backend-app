import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { Type } from 'class-transformer';
import { PollCreateWithoutUserInput } from './poll-create-without-user.input';

@InputType()
export class PollCreateOrConnectWithoutUserInput {

    @Field(() => PollWhereUniqueInput, {nullable:false})
    @Type(() => PollWhereUniqueInput)
    where!: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollCreateWithoutUserInput, {nullable:false})
    @Type(() => PollCreateWithoutUserInput)
    create!: PollCreateWithoutUserInput;
}

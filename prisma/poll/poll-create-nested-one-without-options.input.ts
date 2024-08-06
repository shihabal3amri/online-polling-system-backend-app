import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateWithoutOptionsInput } from './poll-create-without-options.input';
import { Type } from 'class-transformer';
import { PollCreateOrConnectWithoutOptionsInput } from './poll-create-or-connect-without-options.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';

@InputType()
export class PollCreateNestedOneWithoutOptionsInput {

    @Field(() => PollCreateWithoutOptionsInput, {nullable:true})
    @Type(() => PollCreateWithoutOptionsInput)
    create?: PollCreateWithoutOptionsInput;

    @Field(() => PollCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => PollCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput;

    @Field(() => PollWhereUniqueInput, {nullable:true})
    @Type(() => PollWhereUniqueInput)
    connect?: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;
}

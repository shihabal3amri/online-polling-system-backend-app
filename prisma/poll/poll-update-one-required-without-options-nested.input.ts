import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateWithoutOptionsInput } from './poll-create-without-options.input';
import { Type } from 'class-transformer';
import { PollCreateOrConnectWithoutOptionsInput } from './poll-create-or-connect-without-options.input';
import { PollUpsertWithoutOptionsInput } from './poll-upsert-without-options.input';
import { Prisma } from '@prisma/client';
import { PollWhereUniqueInput } from './poll-where-unique.input';
import { PollUpdateToOneWithWhereWithoutOptionsInput } from './poll-update-to-one-with-where-without-options.input';

@InputType()
export class PollUpdateOneRequiredWithoutOptionsNestedInput {

    @Field(() => PollCreateWithoutOptionsInput, {nullable:true})
    @Type(() => PollCreateWithoutOptionsInput)
    create?: PollCreateWithoutOptionsInput;

    @Field(() => PollCreateOrConnectWithoutOptionsInput, {nullable:true})
    @Type(() => PollCreateOrConnectWithoutOptionsInput)
    connectOrCreate?: PollCreateOrConnectWithoutOptionsInput;

    @Field(() => PollUpsertWithoutOptionsInput, {nullable:true})
    @Type(() => PollUpsertWithoutOptionsInput)
    upsert?: PollUpsertWithoutOptionsInput;

    @Field(() => PollWhereUniqueInput, {nullable:true})
    @Type(() => PollWhereUniqueInput)
    connect?: Prisma.AtLeast<PollWhereUniqueInput, 'id'>;

    @Field(() => PollUpdateToOneWithWhereWithoutOptionsInput, {nullable:true})
    @Type(() => PollUpdateToOneWithWhereWithoutOptionsInput)
    update?: PollUpdateToOneWithWhereWithoutOptionsInput;
}

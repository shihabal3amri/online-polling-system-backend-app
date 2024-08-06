import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPollsInput } from './user-create-without-polls.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPollsInput } from './user-create-or-connect-without-polls.input';
import { UserUpsertWithoutPollsInput } from './user-upsert-without-polls.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutPollsInput } from './user-update-to-one-with-where-without-polls.input';

@InputType()
export class UserUpdateOneRequiredWithoutPollsNestedInput {

    @Field(() => UserCreateWithoutPollsInput, {nullable:true})
    @Type(() => UserCreateWithoutPollsInput)
    create?: UserCreateWithoutPollsInput;

    @Field(() => UserCreateOrConnectWithoutPollsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPollsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPollsInput;

    @Field(() => UserUpsertWithoutPollsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPollsInput)
    upsert?: UserUpsertWithoutPollsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutPollsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPollsInput)
    update?: UserUpdateToOneWithWhereWithoutPollsInput;
}

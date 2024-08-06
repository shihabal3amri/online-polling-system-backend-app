import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPollsInput } from './user-create-without-polls.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPollsInput } from './user-create-or-connect-without-polls.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutPollsInput {

    @Field(() => UserCreateWithoutPollsInput, {nullable:true})
    @Type(() => UserCreateWithoutPollsInput)
    create?: UserCreateWithoutPollsInput;

    @Field(() => UserCreateOrConnectWithoutPollsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPollsInput)
    connectOrCreate?: UserCreateOrConnectWithoutPollsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPollsInput } from './user-create-without-polls.input';

@InputType()
export class UserCreateOrConnectWithoutPollsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutPollsInput, {nullable:false})
    @Type(() => UserCreateWithoutPollsInput)
    create!: UserCreateWithoutPollsInput;
}

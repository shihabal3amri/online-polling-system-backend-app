import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutPollsInput } from './user-update-without-polls.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPollsInput } from './user-create-without-polls.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutPollsInput {

    @Field(() => UserUpdateWithoutPollsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPollsInput)
    update!: UserUpdateWithoutPollsInput;

    @Field(() => UserCreateWithoutPollsInput, {nullable:false})
    @Type(() => UserCreateWithoutPollsInput)
    create!: UserCreateWithoutPollsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}

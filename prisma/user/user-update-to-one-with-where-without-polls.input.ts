import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPollsInput } from './user-update-without-polls.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutPollsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutPollsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPollsInput)
    data!: UserUpdateWithoutPollsInput;
}

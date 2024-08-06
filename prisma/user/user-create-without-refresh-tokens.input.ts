import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateNestedManyWithoutUserInput } from '../vote/vote-create-nested-many-without-user.input';
import { PollCreateNestedManyWithoutUserInput } from '../poll/poll-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutRefreshTokensInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutUserInput;

    @Field(() => PollCreateNestedManyWithoutUserInput, {nullable:true})
    polls?: PollCreateNestedManyWithoutUserInput;
}

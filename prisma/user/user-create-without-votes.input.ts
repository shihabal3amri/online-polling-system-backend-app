import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefreshTokenCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-create-nested-many-without-user.input';
import { PollCreateNestedManyWithoutUserInput } from '../poll/poll-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutVotesInput {

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

    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;

    @Field(() => PollCreateNestedManyWithoutUserInput, {nullable:true})
    polls?: PollCreateNestedManyWithoutUserInput;
}

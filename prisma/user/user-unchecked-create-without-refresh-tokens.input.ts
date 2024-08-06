import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteUncheckedCreateNestedManyWithoutUserInput } from '../vote/vote-unchecked-create-nested-many-without-user.input';
import { PollUncheckedCreateNestedManyWithoutUserInput } from '../poll/poll-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutRefreshTokensInput {

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

    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PollUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    polls?: PollUncheckedCreateNestedManyWithoutUserInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefreshTokenUncheckedCreateNestedManyWithoutUserInput } from '../refresh-token/refresh-token-unchecked-create-nested-many-without-user.input';
import { PollUncheckedCreateNestedManyWithoutUserInput } from '../poll/poll-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutVotesInput {

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

    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => PollUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    polls?: PollUncheckedCreateNestedManyWithoutUserInput;
}

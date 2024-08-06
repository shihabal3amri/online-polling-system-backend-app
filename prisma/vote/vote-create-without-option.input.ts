import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVotesInput } from '../user/user-create-nested-one-without-votes.input';
import { PollCreateNestedOneWithoutVotesInput } from '../poll/poll-create-nested-one-without-votes.input';

@InputType()
export class VoteCreateWithoutOptionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isVoted?: boolean;

    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVotesInput;

    @Field(() => PollCreateNestedOneWithoutVotesInput, {nullable:false})
    poll!: PollCreateNestedOneWithoutVotesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateNestedOneWithoutVotesInput } from '../poll/poll-create-nested-one-without-votes.input';
import { OptionCreateNestedOneWithoutVotesInput } from '../option/option-create-nested-one-without-votes.input';

@InputType()
export class VoteCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isVoted?: boolean;

    @Field(() => PollCreateNestedOneWithoutVotesInput, {nullable:false})
    poll!: PollCreateNestedOneWithoutVotesInput;

    @Field(() => OptionCreateNestedOneWithoutVotesInput, {nullable:false})
    option!: OptionCreateNestedOneWithoutVotesInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OptionCreateNestedManyWithoutPollInput } from '../option/option-create-nested-many-without-poll.input';
import { VoteCreateNestedManyWithoutPollInput } from '../vote/vote-create-nested-many-without-poll.input';
import { UserCreateNestedOneWithoutPollsInput } from '../user/user-create-nested-one-without-polls.input';

@InputType()
export class PollCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Boolean, {nullable:true})
    isPollEndedByUser?: boolean;

    @Field(() => Date, {nullable:false})
    willEndAt!: Date | string;

    @Field(() => Boolean, {nullable:true})
    isMultipleOptions?: boolean;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OptionCreateNestedManyWithoutPollInput, {nullable:true})
    options?: OptionCreateNestedManyWithoutPollInput;

    @Field(() => VoteCreateNestedManyWithoutPollInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutPollInput;

    @Field(() => UserCreateNestedOneWithoutPollsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPollsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteUncheckedCreateNestedManyWithoutPollInput } from '../vote/vote-unchecked-create-nested-many-without-poll.input';

@InputType()
export class PollUncheckedCreateWithoutOptionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

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

    @Field(() => VoteUncheckedCreateNestedManyWithoutPollInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutPollInput;
}
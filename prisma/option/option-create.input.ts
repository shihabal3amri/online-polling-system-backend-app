import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteCreateNestedManyWithoutOptionInput } from '../vote/vote-create-nested-many-without-option.input';
import { PollCreateNestedOneWithoutOptionsInput } from '../poll/poll-create-nested-one-without-options.input';

@InputType()
export class OptionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VoteCreateNestedManyWithoutOptionInput, {nullable:true})
    votes?: VoteCreateNestedManyWithoutOptionInput;

    @Field(() => PollCreateNestedOneWithoutOptionsInput, {nullable:false})
    poll!: PollCreateNestedOneWithoutOptionsInput;
}

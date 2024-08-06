import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PollCreateNestedOneWithoutOptionsInput } from '../poll/poll-create-nested-one-without-options.input';

@InputType()
export class OptionCreateWithoutVotesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PollCreateNestedOneWithoutOptionsInput, {nullable:false})
    poll!: PollCreateNestedOneWithoutOptionsInput;
}

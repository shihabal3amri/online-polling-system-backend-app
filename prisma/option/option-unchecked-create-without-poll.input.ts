import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VoteUncheckedCreateNestedManyWithoutOptionInput } from '../vote/vote-unchecked-create-nested-many-without-option.input';

@InputType()
export class OptionUncheckedCreateWithoutPollInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Date, {nullable:true})
    timestamp?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => VoteUncheckedCreateNestedManyWithoutOptionInput, {nullable:true})
    votes?: VoteUncheckedCreateNestedManyWithoutOptionInput;
}

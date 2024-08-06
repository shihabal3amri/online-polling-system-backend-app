import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OptionUncheckedUpdateManyWithoutPollNestedInput } from '../option/option-unchecked-update-many-without-poll-nested.input';
import { VoteUncheckedUpdateManyWithoutPollNestedInput } from '../vote/vote-unchecked-update-many-without-poll-nested.input';

@InputType()
export class PollUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPollEndedByUser?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    willEndAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isMultipleOptions?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OptionUncheckedUpdateManyWithoutPollNestedInput, {nullable:true})
    options?: OptionUncheckedUpdateManyWithoutPollNestedInput;

    @Field(() => VoteUncheckedUpdateManyWithoutPollNestedInput, {nullable:true})
    votes?: VoteUncheckedUpdateManyWithoutPollNestedInput;
}

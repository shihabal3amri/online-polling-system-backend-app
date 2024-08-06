import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { VoteUpdateManyWithoutOptionNestedInput } from '../vote/vote-update-many-without-option-nested.input';
import { PollUpdateOneRequiredWithoutOptionsNestedInput } from '../poll/poll-update-one-required-without-options-nested.input';

@InputType()
export class OptionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => VoteUpdateManyWithoutOptionNestedInput, {nullable:true})
    votes?: VoteUpdateManyWithoutOptionNestedInput;

    @Field(() => PollUpdateOneRequiredWithoutOptionsNestedInput, {nullable:true})
    poll?: PollUpdateOneRequiredWithoutOptionsNestedInput;
}

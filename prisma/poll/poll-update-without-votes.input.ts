import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { OptionUpdateManyWithoutPollNestedInput } from '../option/option-update-many-without-poll-nested.input';
import { UserUpdateOneRequiredWithoutPollsNestedInput } from '../user/user-update-one-required-without-polls-nested.input';

@InputType()
export class PollUpdateWithoutVotesInput {

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

    @Field(() => OptionUpdateManyWithoutPollNestedInput, {nullable:true})
    options?: OptionUpdateManyWithoutPollNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutPollsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPollsNestedInput;
}

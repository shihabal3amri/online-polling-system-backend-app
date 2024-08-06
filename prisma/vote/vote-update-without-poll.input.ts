import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutVotesNestedInput } from '../user/user-update-one-required-without-votes-nested.input';
import { OptionUpdateOneRequiredWithoutVotesNestedInput } from '../option/option-update-one-required-without-votes-nested.input';

@InputType()
export class VoteUpdateWithoutPollInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVoted?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;

    @Field(() => OptionUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    option?: OptionUpdateOneRequiredWithoutVotesNestedInput;
}

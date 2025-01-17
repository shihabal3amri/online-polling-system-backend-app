import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RefreshTokenUncheckedUpdateManyWithoutUserNestedInput } from '../refresh-token/refresh-token-unchecked-update-many-without-user-nested.input';
import { PollUncheckedUpdateManyWithoutUserNestedInput } from '../poll/poll-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutVotesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    timestamp?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => PollUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    polls?: PollUncheckedUpdateManyWithoutUserNestedInput;
}

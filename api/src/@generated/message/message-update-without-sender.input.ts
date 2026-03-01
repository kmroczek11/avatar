import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateOneRequiredWithoutMessagesNestedInput } from '../chat/chat-update-one-required-without-messages-nested.input';

@InputType()
export class MessageUpdateWithoutSenderInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ChatUpdateOneRequiredWithoutMessagesNestedInput, {nullable:true})
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput;
}

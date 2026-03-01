import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    text = "text",
    senderId = "senderId",
    chatId = "chatId",
    createdAt = "createdAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum ActiveChatScalarFieldEnum {
    id = "id",
    userId = "userId",
    chatId = "chatId",
    socketId = "socketId"
}


registerEnumType(ActiveChatScalarFieldEnum, { name: 'ActiveChatScalarFieldEnum', description: undefined })

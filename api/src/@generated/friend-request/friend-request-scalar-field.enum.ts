import { registerEnumType } from '@nestjs/graphql';

export enum FriendRequestScalarFieldEnum {
    id = "id",
    requesterId = "requesterId",
    receiverId = "receiverId",
    status = "status"
}


registerEnumType(FriendRequestScalarFieldEnum, { name: 'FriendRequestScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum FriendRequestScalarFieldEnum {
    id = "id",
    creatorId = "creatorId",
    receiverId = "receiverId",
    status = "status"
}


registerEnumType(FriendRequestScalarFieldEnum, { name: 'FriendRequestScalarFieldEnum', description: undefined })

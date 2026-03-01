import { registerEnumType } from '@nestjs/graphql';

export enum FriendScalarFieldEnum {
    id = "id",
    userId1 = "userId1",
    userId2 = "userId2"
}


registerEnumType(FriendScalarFieldEnum, { name: 'FriendScalarFieldEnum', description: undefined })

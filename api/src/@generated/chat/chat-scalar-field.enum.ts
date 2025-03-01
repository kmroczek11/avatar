import { registerEnumType } from '@nestjs/graphql';

export enum ChatScalarFieldEnum {
    id = "id",
    name = "name",
    isGroup = "isGroup",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ChatScalarFieldEnum, { name: 'ChatScalarFieldEnum', description: undefined })

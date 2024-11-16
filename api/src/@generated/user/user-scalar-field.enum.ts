import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    password = "password",
    phoneNumber = "phoneNumber",
    imgSrc = "imgSrc",
    roles = "roles"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

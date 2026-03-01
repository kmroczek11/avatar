import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendsOfInput } from './user-create-without-friends-of.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendsOfInput } from './user-create-or-connect-without-friends-of.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendsOfInput {

    @Field(() => UserCreateWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendsOfInput)
    create?: UserCreateWithoutFriendsOfInput;

    @Field(() => UserCreateOrConnectWithoutFriendsOfInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendsOfInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendsOfInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}

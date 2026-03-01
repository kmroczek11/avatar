import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendsInput } from './user-create-without-friends.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendsInput } from './user-create-or-connect-without-friends.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendsInput {

    @Field(() => UserCreateWithoutFriendsInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendsInput)
    create?: UserCreateWithoutFriendsInput;

    @Field(() => UserCreateOrConnectWithoutFriendsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}

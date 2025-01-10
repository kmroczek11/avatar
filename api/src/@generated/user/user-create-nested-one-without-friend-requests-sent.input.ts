import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFriendRequestsSentInput } from './user-create-or-connect-without-friend-requests-sent.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendRequestsSentInput {

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserCreateWithoutFriendRequestsSentInput)
    create?: UserCreateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsSentInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFriendRequestsSentInput)
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;
}

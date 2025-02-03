import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendsOfInput } from './user-create-without-friends-of.input';

@InputType()
export class UserCreateOrConnectWithoutFriendsOfInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutFriendsOfInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendsOfInput)
    create!: UserCreateWithoutFriendsOfInput;
}

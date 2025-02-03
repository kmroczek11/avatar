import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFriendsInput } from './user-create-without-friends.input';

@InputType()
export class UserCreateOrConnectWithoutFriendsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutFriendsInput, {nullable:false})
    @Type(() => UserCreateWithoutFriendsInput)
    create!: UserCreateWithoutFriendsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutChatsInput } from './user-update-without-chats.input';
import { UserCreateWithoutChatsInput } from './user-create-without-chats.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutChatsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateWithoutChatsInput, {nullable:false})
    @Type(() => UserUpdateWithoutChatsInput)
    update!: UserUpdateWithoutChatsInput;

    @Field(() => UserCreateWithoutChatsInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsInput)
    create!: UserCreateWithoutChatsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutChatsInput } from './user-create-without-chats.input';

@InputType()
export class UserCreateOrConnectWithoutChatsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserCreateWithoutChatsInput, {nullable:false})
    @Type(() => UserCreateWithoutChatsInput)
    create!: UserCreateWithoutChatsInput;
}

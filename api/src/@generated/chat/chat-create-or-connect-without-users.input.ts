import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutUsersInput } from './chat-create-without-users.input';

@InputType()
export class ChatCreateOrConnectWithoutUsersInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutUsersInput, {nullable:false})
    @Type(() => ChatCreateWithoutUsersInput)
    create!: ChatCreateWithoutUsersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutUsersInput } from './chat-update-without-users.input';
import { ChatCreateWithoutUsersInput } from './chat-create-without-users.input';

@InputType()
export class ChatUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ChatUpdateWithoutUsersInput)
    update!: ChatUpdateWithoutUsersInput;

    @Field(() => ChatCreateWithoutUsersInput, {nullable:false})
    @Type(() => ChatCreateWithoutUsersInput)
    create!: ChatCreateWithoutUsersInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUsersInput } from './chat-create-without-users.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUsersInput } from './chat-create-or-connect-without-users.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [ChatCreateWithoutUsersInput], {nullable:true})
    @Type(() => ChatCreateWithoutUsersInput)
    create?: Array<ChatCreateWithoutUsersInput>;

    @Field(() => [ChatCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUsersInput>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;
}

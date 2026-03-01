import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutUsersInput } from './chat-create-without-users.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutUsersInput } from './chat-create-or-connect-without-users.input';
import { ChatUpsertWithWhereUniqueWithoutUsersInput } from './chat-upsert-with-where-unique-without-users.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithWhereUniqueWithoutUsersInput } from './chat-update-with-where-unique-without-users.input';
import { ChatUpdateManyWithWhereWithoutUsersInput } from './chat-update-many-with-where-without-users.input';
import { ChatScalarWhereInput } from './chat-scalar-where.input';

@InputType()
export class ChatUpdateManyWithoutUsersNestedInput {

    @Field(() => [ChatCreateWithoutUsersInput], {nullable:true})
    @Type(() => ChatCreateWithoutUsersInput)
    create?: Array<ChatCreateWithoutUsersInput>;

    @Field(() => [ChatCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutUsersInput>;

    @Field(() => [ChatUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ChatUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<ChatUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ChatUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<ChatUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ChatUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => ChatUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<ChatUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    @Type(() => ChatScalarWhereInput)
    deleteMany?: Array<ChatScalarWhereInput>;
}

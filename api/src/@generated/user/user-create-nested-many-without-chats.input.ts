import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatsInput } from './user-create-without-chats.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatsInput } from './user-create-or-connect-without-chats.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutChatsInput {

    @Field(() => [UserCreateWithoutChatsInput], {nullable:true})
    @Type(() => UserCreateWithoutChatsInput)
    create?: Array<UserCreateWithoutChatsInput>;

    @Field(() => [UserCreateOrConnectWithoutChatsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutChatsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>>;
}

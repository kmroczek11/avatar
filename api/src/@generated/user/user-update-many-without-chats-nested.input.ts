import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutChatsInput } from './user-create-without-chats.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutChatsInput } from './user-create-or-connect-without-chats.input';
import { UserUpsertWithWhereUniqueWithoutChatsInput } from './user-upsert-with-where-unique-without-chats.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutChatsInput } from './user-update-with-where-unique-without-chats.input';
import { UserUpdateManyWithWhereWithoutChatsInput } from './user-update-many-with-where-without-chats.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutChatsNestedInput {

    @Field(() => [UserCreateWithoutChatsInput], {nullable:true})
    @Type(() => UserCreateWithoutChatsInput)
    create?: Array<UserCreateWithoutChatsInput>;

    @Field(() => [UserCreateOrConnectWithoutChatsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutChatsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutChatsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutChatsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutChatsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutChatsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutChatsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutChatsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutChatsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutChatsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutChatsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutChatsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

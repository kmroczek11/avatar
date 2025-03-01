import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMessagesInput } from './user-create-or-connect-without-messages.input';
import { UserUpsertWithoutMessagesInput } from './user-upsert-without-messages.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMessagesInput } from './user-update-to-one-with-where-without-messages.input';

@InputType()
export class UserUpdateOneRequiredWithoutMessagesNestedInput {

    @Field(() => UserCreateWithoutMessagesInput, {nullable:true})
    @Type(() => UserCreateWithoutMessagesInput)
    create?: UserCreateWithoutMessagesInput;

    @Field(() => UserCreateOrConnectWithoutMessagesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMessagesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;

    @Field(() => UserUpsertWithoutMessagesInput, {nullable:true})
    @Type(() => UserUpsertWithoutMessagesInput)
    upsert?: UserUpsertWithoutMessagesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'phoneNumber'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMessagesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMessagesInput)
    update?: UserUpdateToOneWithWhereWithoutMessagesInput;
}

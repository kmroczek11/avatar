import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';
import { FriendCreateWithoutUser1Input } from './friend-create-without-user-1.input';

@InputType()
export class FriendCreateOrConnectWithoutUser1Input {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => FriendCreateWithoutUser1Input, {nullable:false})
    @Type(() => FriendCreateWithoutUser1Input)
    create!: FriendCreateWithoutUser1Input;
}

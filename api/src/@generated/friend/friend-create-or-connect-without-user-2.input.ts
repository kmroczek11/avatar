import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';
import { FriendCreateWithoutUser2Input } from './friend-create-without-user-2.input';

@InputType()
export class FriendCreateOrConnectWithoutUser2Input {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => FriendCreateWithoutUser2Input, {nullable:false})
    @Type(() => FriendCreateWithoutUser2Input)
    create!: FriendCreateWithoutUser2Input;
}

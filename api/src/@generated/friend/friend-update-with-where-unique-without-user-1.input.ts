import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';
import { FriendUpdateWithoutUser1Input } from './friend-update-without-user-1.input';

@InputType()
export class FriendUpdateWithWhereUniqueWithoutUser1Input {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => FriendUpdateWithoutUser1Input, {nullable:false})
    @Type(() => FriendUpdateWithoutUser1Input)
    data!: FriendUpdateWithoutUser1Input;
}

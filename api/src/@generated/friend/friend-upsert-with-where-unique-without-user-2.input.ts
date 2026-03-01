import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';
import { FriendUpdateWithoutUser2Input } from './friend-update-without-user-2.input';
import { FriendCreateWithoutUser2Input } from './friend-create-without-user-2.input';

@InputType()
export class FriendUpsertWithWhereUniqueWithoutUser2Input {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => FriendUpdateWithoutUser2Input, {nullable:false})
    @Type(() => FriendUpdateWithoutUser2Input)
    update!: FriendUpdateWithoutUser2Input;

    @Field(() => FriendCreateWithoutUser2Input, {nullable:false})
    @Type(() => FriendCreateWithoutUser2Input)
    create!: FriendCreateWithoutUser2Input;
}

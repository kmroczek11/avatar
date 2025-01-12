import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestUpdateWithoutCreatorInput } from './friend-request-update-without-creator.input';
import { FriendRequestCreateWithoutCreatorInput } from './friend-request-create-without-creator.input';

@InputType()
export class FriendRequestUpsertWithWhereUniqueWithoutCreatorInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;

    @Field(() => FriendRequestUpdateWithoutCreatorInput, {nullable:false})
    @Type(() => FriendRequestUpdateWithoutCreatorInput)
    update!: FriendRequestUpdateWithoutCreatorInput;

    @Field(() => FriendRequestCreateWithoutCreatorInput, {nullable:false})
    @Type(() => FriendRequestCreateWithoutCreatorInput)
    create!: FriendRequestCreateWithoutCreatorInput;
}

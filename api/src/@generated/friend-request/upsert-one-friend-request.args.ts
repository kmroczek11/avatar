import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';
import { FriendRequestCreateInput } from './friend-request-create.input';
import { FriendRequestUpdateInput } from './friend-request-update.input';

@ArgsType()
export class UpsertOneFriendRequestArgs {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'requesterId_receiverId'>;

    @Field(() => FriendRequestCreateInput, {nullable:false})
    @Type(() => FriendRequestCreateInput)
    create!: FriendRequestCreateInput;

    @Field(() => FriendRequestUpdateInput, {nullable:false})
    @Type(() => FriendRequestUpdateInput)
    update!: FriendRequestUpdateInput;
}

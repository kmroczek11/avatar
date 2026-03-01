import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFriendRequestOrThrowArgs {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    @Type(() => FriendRequestWhereUniqueInput)
    where!: Prisma.AtLeast<FriendRequestWhereUniqueInput, 'id' | 'creatorId_receiverId'>;
}

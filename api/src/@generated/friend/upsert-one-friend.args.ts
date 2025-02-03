import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FriendWhereUniqueInput } from './friend-where-unique.input';
import { Type } from 'class-transformer';
import { FriendCreateInput } from './friend-create.input';
import { FriendUpdateInput } from './friend-update.input';

@ArgsType()
export class UpsertOneFriendArgs {

    @Field(() => FriendWhereUniqueInput, {nullable:false})
    @Type(() => FriendWhereUniqueInput)
    where!: Prisma.AtLeast<FriendWhereUniqueInput, 'id' | 'userId1_userId2'>;

    @Field(() => FriendCreateInput, {nullable:false})
    @Type(() => FriendCreateInput)
    create!: FriendCreateInput;

    @Field(() => FriendUpdateInput, {nullable:false})
    @Type(() => FriendUpdateInput)
    update!: FriendUpdateInput;
}

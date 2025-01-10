import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestRequesterIdReceiverIdCompoundUniqueInput } from './friend-request-requester-id-receiver-id-compound-unique.input';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FriendRequestWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FriendRequestRequesterIdReceiverIdCompoundUniqueInput, {nullable:true})
    requesterId_receiverId?: FriendRequestRequesterIdReceiverIdCompoundUniqueInput;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    AND?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    OR?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    NOT?: Array<FriendRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    requesterId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverId?: StringFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    requester?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    receiver?: UserRelationFilter;
}

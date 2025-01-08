import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreatorIdReceiverIdCompoundUniqueInput } from './friend-request-creator-id-receiver-id-compound-unique.input';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumStatusFilter } from '../prisma/enum-status-filter.input';
import { UserScalarRelationFilter } from '../prisma/user-scalar-relation-filter.input';

@InputType()
export class FriendRequestWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FriendRequestCreatorIdReceiverIdCompoundUniqueInput, {nullable:true})
    creatorId_receiverId?: FriendRequestCreatorIdReceiverIdCompoundUniqueInput;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    AND?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    OR?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    NOT?: Array<FriendRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    creatorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverId?: StringFilter;

    @Field(() => EnumStatusFilter, {nullable:true})
    status?: EnumStatusFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    creator?: UserScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    receiver?: UserScalarRelationFilter;
}

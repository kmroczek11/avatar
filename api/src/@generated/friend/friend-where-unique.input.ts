import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendUserId1UserId2CompoundUniqueInput } from './friend-user-id-1-user-id-2-compound-unique.input';
import { FriendWhereInput } from './friend-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FriendWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FriendUserId1UserId2CompoundUniqueInput, {nullable:true})
    userId1_userId2?: FriendUserId1UserId2CompoundUniqueInput;

    @Field(() => [FriendWhereInput], {nullable:true})
    AND?: Array<FriendWhereInput>;

    @Field(() => [FriendWhereInput], {nullable:true})
    OR?: Array<FriendWhereInput>;

    @Field(() => [FriendWhereInput], {nullable:true})
    NOT?: Array<FriendWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId1?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId2?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user1?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user2?: UserRelationFilter;
}

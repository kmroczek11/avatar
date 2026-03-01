import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFriendRequestArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    @Type(() => FriendRequestWhereInput)
    where?: FriendRequestWhereInput;
}

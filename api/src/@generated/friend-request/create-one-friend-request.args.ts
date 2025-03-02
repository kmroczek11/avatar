import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestCreateInput } from './friend-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFriendRequestArgs {

    @Field(() => FriendRequestCreateInput, {nullable:false})
    @Type(() => FriendRequestCreateInput)
    data!: FriendRequestCreateInput;
}

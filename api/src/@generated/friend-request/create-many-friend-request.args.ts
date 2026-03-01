import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestCreateManyInput } from './friend-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFriendRequestArgs {

    @Field(() => [FriendRequestCreateManyInput], {nullable:false})
    @Type(() => FriendRequestCreateManyInput)
    data!: Array<FriendRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

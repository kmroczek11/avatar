import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateManyRequesterInput } from './friend-request-create-many-requester.input';
import { Type } from 'class-transformer';

@InputType()
export class FriendRequestCreateManyRequesterInputEnvelope {

    @Field(() => [FriendRequestCreateManyRequesterInput], {nullable:false})
    @Type(() => FriendRequestCreateManyRequesterInput)
    data!: Array<FriendRequestCreateManyRequesterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

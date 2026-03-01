import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateManyReceiverInput } from './friend-request-create-many-receiver.input';
import { Type } from 'class-transformer';

@InputType()
export class FriendRequestCreateManyReceiverInputEnvelope {

    @Field(() => [FriendRequestCreateManyReceiverInput], {nullable:false})
    @Type(() => FriendRequestCreateManyReceiverInput)
    data!: Array<FriendRequestCreateManyReceiverInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

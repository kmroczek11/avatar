import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendRequestRequesterIdReceiverIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    requesterId!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;
}

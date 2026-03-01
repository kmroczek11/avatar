import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendRequestCreatorIdReceiverIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    creatorId!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;
}

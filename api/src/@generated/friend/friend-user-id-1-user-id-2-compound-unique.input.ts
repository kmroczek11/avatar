import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendUserId1UserId2CompoundUniqueInput {

    @Field(() => String, {nullable:false})
    userId1!: string;

    @Field(() => String, {nullable:false})
    userId2!: string;
}

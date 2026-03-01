import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendUncheckedCreateWithoutUser2Input {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId1!: string;
}

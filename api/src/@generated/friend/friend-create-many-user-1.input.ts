import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FriendCreateManyUser1Input {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    userId2!: string;
}

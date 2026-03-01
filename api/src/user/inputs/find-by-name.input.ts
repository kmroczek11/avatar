import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindByNameInput {
    @Field()
    name: string;

    @Field()
    creatorId: string;
}

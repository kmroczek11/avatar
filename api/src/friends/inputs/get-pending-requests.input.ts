import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetPendingRequestsInput {
  @Field()
  receiverId: string;
}

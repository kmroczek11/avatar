import { Field, InputType } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';

@InputType()
export class ChangeProfilePicInput {
  @Field()
  userId: string;

  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}

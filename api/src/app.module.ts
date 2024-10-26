import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import {
  GraphQLError,
  GraphQLFormattedError,
} from 'graphql/error/GraphQLError';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      uploads: false,
      // formatError: (error: GraphQLError) => {
      //   const graphQLFormattedError: GraphQLFormattedError = {
      //     message: error?.extensions?.exception?.code || error?.message,
      //   };
      //   return graphQLFormattedError;
      // },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

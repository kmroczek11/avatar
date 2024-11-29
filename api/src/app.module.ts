import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import {
  GraphQLError,
  GraphQLFormattedError,
} from 'graphql/error/GraphQLError';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration'
import { RedisModule } from './redis/redis.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './core/all-exceptions.filter';
import { RolesGuard } from './auth/guards/roles.guard';
import { GqlAuthGuard } from './auth/guards/gql-auth.guard';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      uploads: false,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error?.message,
        };
        return graphQLFormattedError;
      },
    }),
    ConfigModule.forRoot({
			isGlobal: true,
			load: [configuration],
		}),
    RedisModule,
    AuthModule,
    UserModule,
  ],
  controllers: [],
    providers: [
      {
        provide: APP_FILTER,
        useClass: AllExceptionsFilter,
      },
      // {
      //   provide: APP_GUARD,
      //   useClass: GqlAuthGuard,
      // },
      {
        provide: APP_GUARD,
        useClass: RolesGuard,
      },
  ],
})
export class AppModule {}

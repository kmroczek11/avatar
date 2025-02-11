import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*", credentials: true });
  app.use(graphqlUploadExpress({
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
    maxFiles: 1,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

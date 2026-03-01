import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*", credentials: true });
  app.use(graphqlUploadExpress({
    maxFileSize: 5 * 1024 * 1024, // 5MB limit
    maxFiles: 1,
  }));

  const config = new DocumentBuilder()
    .setTitle('Avatar')
    .setDescription('The Avatar API description')
    .setVersion('1.0')
    .addTag('avatar')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

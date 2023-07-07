import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api Marvel')
    .setDescription('Documentação da api marvel')
    .setVersion('1.0')
    .addTag('Comics')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document)

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, () => console.log('Server is running'));
}
bootstrap();

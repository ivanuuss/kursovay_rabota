import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ApiTags, DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Education API')
      .setVersion('1.0')
      .build(); // Конфигурируем сборщик документации
  ApiTags("Work")
  const document = SwaggerModule.createDocument(app, config); // создаем апи документацию
  SwaggerModule.setup('api_docs', app, document); //включаем документацию Swagger по пути localhost:3001/api_docs
  await app.listen(3006); //устанавливаем порт прослушивания 3002
  await app.setGlobalPrefix('/api'); //глобальный префикс для роутов контроллера

}
bootstrap();

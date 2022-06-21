import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //유효성 검사용 파이프 | npm i class-transformer | npm i class-validator | dto를 사용하기 위함
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //
      forbidNonWhitelisted: true, // 이상한 것을 보내면 리퀘스트 자체를 막아버릴 수 있다.
      transform: true, // transform은 url를 실제 타입으로 변경시켜준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();

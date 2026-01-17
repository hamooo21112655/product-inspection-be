import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalParseIntPipe } from './common/pipes/global-parse-int/global-parse-int.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
    new GlobalParseIntPipe(),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

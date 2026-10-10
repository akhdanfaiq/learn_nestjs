import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: { enableImplicitConversion: true },
  }),
);

  //wajib ada di setiap projek nestJS
  app.useGlobalPipes(new ValidationPipe({
    transform: true, 
    whitelist :true, 
    forbidNonWhitelisted : true
  }),
);

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();

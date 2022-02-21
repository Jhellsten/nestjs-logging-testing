import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });
  // This works 👇
  // app.useLogger(['error']);
  await app.listen(3000);
}
bootstrap();

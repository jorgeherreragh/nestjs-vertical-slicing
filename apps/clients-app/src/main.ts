import { NestFactory } from '@nestjs/core';
import { ClientsAppModule } from './clients-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientsAppModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { OnboardingAppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(OnboardingAppModule);
  await app.listen(3002);
}
bootstrap();

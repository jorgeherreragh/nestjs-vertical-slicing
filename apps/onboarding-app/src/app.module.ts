import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'src/config/db/database.config';
import { OnboardingModule } from 'src/onboarding/onboarding.module';
import { OnboardingController } from 'src/onboarding/infrastructure/adapters/http/onboarding.controller';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    // Database
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        typeOrmConfig(configService),
      inject: [ConfigService],
    }),
    OnboardingModule,
  ],
  controllers: [OnboardingController],
  providers: [],
})
export class OnboardingAppModule {}

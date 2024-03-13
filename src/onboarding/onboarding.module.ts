import { Module } from '@nestjs/common';
import { OnboardingController } from './infrastructure/adapters/http/onboarding.controller';
import { OnboardingRepository } from './infrastructure/adapters/db/onboarding.repository';
import { CreateUserService } from './application/create-user/create-user.service';

@Module({
  imports: [
    /* TypeOrmModule.forFeature([UserDao]) */
  ],
  exports: [CreateUserService],
  providers: [CreateUserService, OnboardingRepository],
  controllers: [OnboardingController],
})
export class OnboardingModule {}

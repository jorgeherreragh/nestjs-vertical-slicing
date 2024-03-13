import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from './application/create-client/create-client.service';
import { AccountRepository } from './infrastructure/adapters/secondary/db/account.repository';
import { AccountController } from './infrastructure/adapters/primary/http/account.controller';
// import { UserDao } from './infrastructure/adapters/secondary/db/dao/account.dao';

@Module({
  imports: [
    /* TypeOrmModule.forFeature([UserDao]) */
  ],
  exports: [CreateUserService],
  providers: [CreateUserService, AccountRepository],
  controllers: [AccountController],
})
export class AccountsModule {}

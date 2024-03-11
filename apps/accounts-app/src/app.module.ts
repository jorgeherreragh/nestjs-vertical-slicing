import { Module } from '@nestjs/common';
import { AccountController } from 'src/accounts/application/account.controller';
import { CreateAccountUseCase } from 'src/accounts/domain/use-case/create-account.use-case';
import { AccountServiceMongo } from 'src/accounts/infrastructure/driven-adapters/account/account.mongo';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [
    AccountServiceMongo,
    {
      provide: CreateAccountUseCase,
      useFactory: (accountServiceMongo: AccountServiceMongo) => new CreateAccountUseCase(accountServiceMongo),
      inject: [AccountServiceMongo]
    }
  ],
})
export class AppModule { }

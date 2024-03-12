import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from 'src/accounts/application/account.controller';
import { CreateAccountUseCase } from 'src/accounts/domain/use-case/create-account.use-case';
import { AccountServiceMongo } from 'src/accounts/infrastructure/driven-adapters/account/account.mongo';
import { AuthController } from 'src/auth/application/auth.controller';
import { AuthenticateUserUseCase } from 'src/auth/domain/use-case/authenticate-user.use-case';
import { AuthServiceMongo } from 'src/auth/infrastructure/driven-adapters/auth/auth.mongo';
import { TypeORMConfig } from 'typeorm.config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(TypeORMConfig)],
  controllers: [AccountController, AuthController],
  providers: [
    AccountServiceMongo,
    {
      provide: CreateAccountUseCase,
      useFactory: (accountServiceMongo: AccountServiceMongo) => new CreateAccountUseCase(accountServiceMongo),
      inject: [AccountServiceMongo]
    },
    AuthServiceMongo,
    {
      provide: AuthenticateUserUseCase,
      useFactory: (authServiceMongo: AuthServiceMongo) => new AuthenticateUserUseCase(authServiceMongo),
      inject: [AuthServiceMongo] 
    }
  ],
})
export class AppModule { }

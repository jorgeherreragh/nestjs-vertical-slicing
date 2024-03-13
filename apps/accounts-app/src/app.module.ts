import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AccountsModule } from 'src/accounts/accounts.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'src/config/db/database.config';
import { AccountController } from 'src/accounts/infrastructure/adapters/primary/http/account.controller';

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
    AccountsModule,
  ],
  controllers: [AccountController],
  providers: [],
})
export class AppModule {}

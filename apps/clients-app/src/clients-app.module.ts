import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from 'src/clients/application/client.controller';
import { ClientServiceMongo } from 'src/clients/domain/infrastructure/driven-adapters/client/client.mongo';
import { CreateClientUseCase } from 'src/clients/domain/use-case/create-client.use-case';
import { TypeORMConfig } from 'typeorm.config';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(TypeORMConfig)],
  controllers: [ClientController],
  providers: [
    ClientServiceMongo,
    {
      provide: CreateClientUseCase,
      useFactory: (clientServiceMongo: ClientServiceMongo) =>
        new CreateClientUseCase(clientServiceMongo),
      inject: [ClientServiceMongo],
    },
  ],
})
export class ClientsAppModule {}

import { Module } from '@nestjs/common';
import { ClientController } from 'src/clients/application/client.controller';
import { ClientServiceMongo } from 'src/clients/domain/infrastructure/driven-adapters/client/client.mongo';
import { CreateClientUseCase } from 'src/clients/domain/use-case/create-client.use-case';

@Module({
  imports: [],
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

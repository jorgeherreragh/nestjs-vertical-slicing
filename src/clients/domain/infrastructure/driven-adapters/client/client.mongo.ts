import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ClientRepository } from 'src/clients/domain/gateway/client.repository';
import { Client } from 'src/clients/domain/model/client/client.model';

@Injectable()
export class ClientServiceMongo implements ClientRepository {
  saveClient(client: Client): Observable<Client> {
    console.log('Creating client');

    return of(client);
  }
  getAllClients(): Observable<Client> {
    throw new Error('Method not implemented.');
  }
}

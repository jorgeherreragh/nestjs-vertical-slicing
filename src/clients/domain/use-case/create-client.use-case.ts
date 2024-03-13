import { Observable } from 'rxjs';
import { ClientRepository } from '../gateway/client.repository';
import { Client } from '../model/client/client.model';

export class CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  execute(client: Client): Observable<Client> {
    return this.clientRepository.saveClient(client);
  }
}

import { Observable } from "rxjs";
import { Client } from "../model/client/client.model";

export interface ClientRepository {
    saveClient(client: Client): Observable<Client>;
    getAllClients(): Observable<Client>; 
}
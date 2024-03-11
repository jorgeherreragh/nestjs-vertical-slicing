import { Body, Controller, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { Client } from "../domain/model/client/client.model";
import { CreateClientUseCase } from "../domain/use-case/create-client.use-case";

@Controller("client")
export class ClientController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  @Post()
  createClient(@Body() client: Client): Observable<Client> {
    return this.createClientUseCase.execute(client);
  }
}
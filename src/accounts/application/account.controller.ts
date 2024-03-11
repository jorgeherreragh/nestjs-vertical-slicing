import { Body, Controller, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { CreateAccountUseCase } from "../domain/use-case/create-account.use-case";
import { AccountModel } from "../domain/model/account/account.model";

@Controller("account")
export class AccountController {
  constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

  @Post()
  createClient(@Body() account: AccountModel): Observable<AccountModel> {
    return this.createAccountUseCase.execute(account);
  }
}
import { Observable } from "rxjs";
import { AccountModel } from "../model/account/account.model";
import { AccountRepository } from "../gateway/account.repository";

export class CreateAccountUseCase{
    
    constructor(private readonly accountRepo:AccountRepository){

    }

    execute(account:AccountModel):Observable<AccountModel>{
        return this.accountRepo.createAccount(account);
    }
}
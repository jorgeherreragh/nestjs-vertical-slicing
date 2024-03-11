import { Observable, of } from "rxjs";
import { AccountRepository } from "src/accounts/domain/gateway/account.repository";
import { AccountModel } from "src/accounts/domain/model/account/account.model";

export class AccountServiceMongo implements AccountRepository {
    createAccount(account: AccountModel): Observable<AccountModel> {
        console.log("Creating the account");
        return of(account);
    }
}
import { Observable } from "rxjs";
import { AccountModel } from "../model/account/account.model";

export interface AccountRepository{
    createAccount(account:AccountModel):Observable<AccountModel>;
}
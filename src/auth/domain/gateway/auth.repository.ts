import { AuthModel } from "../model/auth/auth.model";
import { AuthenticateUserDto } from "src/auth/application/dto/auth.dto";


export interface AuthRepository {
    authenticate(account: AuthenticateUserDto): Promise<AuthModel>;
}
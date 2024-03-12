import { Observable } from "rxjs";
import { AuthRepository } from "../gateway/auth.repository";
import { AuthModel } from "../model/auth/auth.model";
import { AuthenticateUserDto } from "src/auth/application/dto/auth.dto";

export class AuthenticateUserUseCase {
    
    constructor(private readonly authRepository: AuthRepository){

    }

    async execute(user:AuthenticateUserDto):Promise<AuthModel>{
        return await this.authRepository.authenticate(user);
    }
}
import { Body, Controller, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthenticateUserUseCase } from "../../auth/domain/use-case/authenticate-user.use-case";
import { AuthModel } from "../../auth/domain/model/auth/auth.model";
import { AuthenticateUserDto } from "./dto/auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase) {}

  @Post()
  authenticateUser(@Body() account: AuthenticateUserDto): Promise<AuthModel> {
    return this.authenticateUserUseCase.execute(account);
  }
}
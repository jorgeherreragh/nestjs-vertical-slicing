import { Injectable } from '@nestjs/common';
import { CreateAccountRequestDto } from 'src/accounts/infrastructure/adapters/primary/http/dto/create-account.request.dto';
import { AccountRepository } from 'src/accounts/infrastructure/adapters/secondary/db/account.repository';

@Injectable()
export class CreateUserService {
  constructor(private accountRepository: AccountRepository) {}

  async create(attrs: CreateAccountRequestDto) {
    const user = Object.assign(attrs); // le asignamos lo que esta en attrs a lo que esta en user

    return this.accountRepository.create(user);
  }
}

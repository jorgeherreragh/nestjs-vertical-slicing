// import {
//   // FindManyOptions,
//   // RemoveOptions,
//   // Repository,
//   // SaveOptions,
// } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
// import { UserDao } from './dao/account.dao';
import { IAccountRepositoryInterface } from 'src/accounts/domain/ports/secondary/db/account.repository';
import { CreateAccountRequestDto } from '../../primary/http/dto/create-account.request.dto';

@Injectable()
export class AccountRepository
  implements IAccountRepositoryInterface<CreateAccountRequestDto>
{
  // constructor(
  //   @InjectRepository(AccountModel)
  //   private repository: Repository<AccountModel>,
  // ) {}

  create(data: CreateAccountRequestDto): Promise<any> {
    return new Promise((resolve) =>
      resolve(`Created! with data -> ${JSON.stringify(data)}`),
    );
  }
}

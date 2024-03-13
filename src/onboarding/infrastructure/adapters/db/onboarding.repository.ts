import { Injectable } from '@nestjs/common';
import { IOnboardingRepositoryInterface } from 'src/onboarding/domain/ports/db/onboarding.repository';
import { CreateUserRequestDto } from '../http/dto/create-user/create-user.request.dto';

@Injectable()
export class OnboardingRepository
  implements IOnboardingRepositoryInterface<CreateUserRequestDto>
{
  // constructor(
  //   @InjectRepository(AccountModel)
  //   private repository: Repository<AccountModel>,
  // ) {}

  createUser(data: CreateUserRequestDto): Promise<any> {
    return new Promise((resolve) =>
      resolve(`Created! with data -> ${JSON.stringify(data)}`),
    );
  }
}

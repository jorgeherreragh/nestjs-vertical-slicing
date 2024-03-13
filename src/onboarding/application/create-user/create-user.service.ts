import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from 'src/onboarding/infrastructure/adapters/http/dto/create-user/create-user.request.dto';

@Injectable()
export class CreateUserService {
  //   constructor(private userRepository: UserRepository) {}

  async create(attrs: CreateUserRequestDto) {
    const user = Object.assign(attrs); // le asignamos lo que esta en attrs a lo que esta en user
    return user;
    // return this.userRepository.create(user);
  }
}

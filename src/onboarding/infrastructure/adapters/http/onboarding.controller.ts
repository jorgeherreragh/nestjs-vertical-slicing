import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SerializeResponseDto } from 'src/shared/infrastructure/decorators/serialize.decorator';
import { ICreateAccountController } from 'src/onboarding/domain/ports/api/create.controller.interface';
import { CreateUserRequestDto } from './dto/create-user/create-user.request.dto';
import { CreateUserResponseDto } from './dto/create-user/create-user.response.dto';
import { CreateUserService } from 'src/onboarding/application/create-user/create-user.service';

@Controller('onboarding')
export class OnboardingController
  implements ICreateAccountController<CreateUserRequestDto>
{
  constructor(private createUserService: CreateUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(CreateUserResponseDto)
  async create(
    @Body() body: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return this.createUserService.create(body);
  }
}

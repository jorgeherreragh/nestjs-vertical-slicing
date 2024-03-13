import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ICreateAccountController } from 'src/accounts/domain/ports/primary/api/create.controller.interface';
import { CreateUserService } from 'src/accounts/application/create-client/create-client.service';
import { SerializeResponseDto } from 'src/shared/infrastructure/decorators/serialize.decorator';
import { CreateAccountRequestDto } from './dto/create-account.request.dto';
import { CreateAccountResponseDto } from './dto/create-account.response.dto';

@Controller('account')
export class AccountController
  implements ICreateAccountController<CreateAccountRequestDto>
{
  constructor(private createUserService: CreateUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @SerializeResponseDto(CreateAccountResponseDto)
  async create(
    @Body() body: CreateAccountRequestDto,
  ): Promise<CreateAccountResponseDto> {
    return this.createUserService.create(body);
  }
}

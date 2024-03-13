import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  name?: string;
}

import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateAccountRequestDto {
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

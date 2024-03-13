import { Expose } from 'class-transformer';
export class CreateAccountResponseDto {
  @Expose()
  email: string;

  @Expose()
  name?: string;
}

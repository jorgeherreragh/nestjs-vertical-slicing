import { UseInterceptors } from '@nestjs/common';
import { ResponseBaseDto } from '../response-base.dto';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';

export function SerializeResponseDto(
  dto: ResponseBaseDto,
): MethodDecorator & ClassDecorator {
  return UseInterceptors(new SerializeInterceptor(dto));
}

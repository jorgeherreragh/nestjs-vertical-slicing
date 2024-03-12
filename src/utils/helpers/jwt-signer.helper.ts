import { sign } from 'jsonwebtoken';
import { SigningError } from '../../utils/errors/signing-error';
import { decode } from '../../utils/helpers/base64.helper';
export const signToken = (content: any, expiresIn: string): string => {
  try {
    return sign(
      content,
      decode(process.env.JWT_SIGNING_PRIVATE_KEY_BASE64 || ''),
      {
        expiresIn: expiresIn,
        algorithm: 'RS256',
      },
    );
  } catch (error: any) {
    throw new SigningError(error.message);
  }
};
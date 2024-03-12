import { signToken } from './jwt-signer.helper';
import { decode, verify } from 'jsonwebtoken';
import { decode as decodeBase64 } from './base64.helper';
import { privateKeyMock, publicKeyMock } from 'src/test/mock/certificates';

describe('JWT Signer helper', () => {
  describe('sign', () => {
    it('should generate and sign a jwt token with the provided content and expireDate and using the private key from environment', () => {
      process.env.JWT_SIGNING_PRIVATE_KEY_BASE64 = privateKeyMock;
      process.env.JWT_SIGNING_PUBLIC_KEY_BASE64 = publicKeyMock;
      const jwtContent = {
        data: 'testData',
      };
      const jwtExpiresIn = '30d';
      const signedToken = signToken(jwtContent, jwtExpiresIn);
      const decodedToken = JSON.parse(JSON.stringify(decode(signedToken)));
      expect(
        verify(
          signedToken,
          decodeBase64(process.env.JWT_SIGNING_PUBLIC_KEY_BASE64),
        ),
      ).toBeTruthy();

      expect(decodedToken.data).toEqual('testData');
      expect(decodedToken.exp).toBeDefined();
      expect(decodedToken.iat).toBeDefined();
    });
  });
});

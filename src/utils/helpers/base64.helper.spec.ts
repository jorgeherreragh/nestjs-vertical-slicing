import { encode, decode } from './base64.helper';

describe('Base64 helpers', () => {
  const string = "pn+J['Jtq&Ajx_43~P5D4Q-{(rOop>Zz";
  const stringEncodedWithBase64 =
    'cG4rSlsnSnRxJkFqeF80M35QNUQ0US17KHJPb3A+Wno=';
  describe('encode', () => {
    it('should encode the string', () => {
      expect(encode(string)).toEqual(stringEncodedWithBase64);
    });
  });
  describe('decode', () => {
    it('should decode the base 64 string', () => {
      expect(decode(stringEncodedWithBase64)).toEqual(string);
    });
  });
});

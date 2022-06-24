import jwt, { SignOptions } from 'jsonwebtoken';

const jwdConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const encode = (data: any) => jwt.sign({ data }, 'senha_super_secretaMesmo!!', jwdConfig);

const decode = (token: any) => jwt.verify(token, 'senha_super_secretaMesmo!!');

export default {
  encode,
  decode,
};
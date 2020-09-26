import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import Provider from '../models/Provider';

interface Request {
  email: string;
  password: string;
}

interface Response {
  provider: Provider;
  token: string;
}

class AuthenticateProviderService {
  public async execute({ email, password }: Request): Promise<Response> {
    const providersRepository = getRepository(Provider);

    const provider = await providersRepository.findOne({ where: { email } });

    if (!provider) {
      throw new Error('Incorrect email/password combination!');
    }

    const passwordMatched = await compare(password, provider.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination!');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: provider.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { provider, token };
  }
}

export default AuthenticateProviderService;

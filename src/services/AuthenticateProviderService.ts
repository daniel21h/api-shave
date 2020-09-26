import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
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

    const token = sign({}, '689622cd2166afe91788f442d659e33f', {
      subject: provider.id,
      expiresIn: '1d',
    });

    return { provider, token };
  }
}

export default AuthenticateProviderService;

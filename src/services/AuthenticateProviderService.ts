import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Provider from '../models/Provider';

interface Request {
  email: string;
  password: string;
}

interface Response {
  provider: Provider;
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

    return { provider };
  }
}

export default AuthenticateProviderService;

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProvidersRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  provider: Provider;
  token: string;
}

@injectable()
class AuthenticateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({ email, password }: Request): Promise<Response> {
    const provider = await this.providersRepository.findByEmail(email);

    if (!provider) {
      throw new AppError('Incorrect email/password combination!', 401);
    }

    const passwordMatched = await compare(password, provider.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination!', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: provider.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { provider, token };
  }
}

export default AuthenticateProviderService;

import { hash } from 'bcryptjs';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProvidersRepository';

interface IRequest {
  name: string;
  email: string;
  phone: number;
  password: string;
}

@injectable()
class CreateProviderService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,
  ) {}

  public async execute({
    name,
    email,
    phone,
    password,
  }: IRequest): Promise<Provider> {
    const checkUserExists = await this.providersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const provider = await this.providersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    return provider;
  }
}

export default CreateProviderService;

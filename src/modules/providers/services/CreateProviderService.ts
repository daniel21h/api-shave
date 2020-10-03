import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Provider from '../models/Provider';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  phone: number;
  password: string;
}

class CreateProviderService {
  public async execute({
    name,
    email,
    phone,
    password,
  }: Request): Promise<Provider> {
    const providersRepository = getRepository(Provider);

    const checkUserExists = await providersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await hash(password, 8);

    const provider = providersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await providersRepository.save(provider);

    return provider;
  }
}

export default CreateProviderService;

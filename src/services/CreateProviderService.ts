import { getRepository } from 'typeorm';
import Provider from '../models/Provider';

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
      throw new Error('Email address already used.');
    }

    const provider = providersRepository.create({
      name,
      email,
      phone,
      password,
    });

    await providersRepository.save(provider);

    return provider;
  }
}

export default CreateProviderService;

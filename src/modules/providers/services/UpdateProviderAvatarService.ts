import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import Provider from '../infra/typeorm/entities/Provider';
import IProvidersRepository from '../repositories/IProvidersRepository';

interface Request {
  provider_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateProviderAvatarService {
  constructor(
    @inject('ProvidersRepository')
    private providersRepository: IProvidersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    provider_id,
    avatarFilename,
  }: Request): Promise<Provider> {
    const provider = await this.providersRepository.findById(provider_id);

    if (!provider) {
      throw new AppError(
        'Only authenticated providers can change avatar.',
        401,
      );
    }

    if (provider.avatar) {
      await this.storageProvider.deleteFile(provider.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    provider.avatar = filename;

    await this.providersRepository.save(provider);

    return provider;
  }
}

export default UpdateProviderAvatarService;

import path from 'path';
import fs from 'fs';
import { getRepository } from 'typeorm';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import Provider from '../infra/typeorm/entities/Provider';

interface Request {
  provider_id: string;
  avatarFilename: string;
}

class UpdateProviderAvatarService {
  public async execute({
    provider_id,
    avatarFilename,
  }: Request): Promise<Provider> {
    const providersRepository = getRepository(Provider);

    const provider = await providersRepository.findOne(provider_id);

    if (!provider) {
      throw new AppError(
        'Only authenticated providers can change avatar.',
        401,
      );
    }

    if (provider.avatar) {
      // Delete last avatar
      const providerAvatarFilePath = path.join(
        uploadConfig.directory,
        provider.avatar,
      );
      const providerAvatarFileExists = await fs.promises.stat(
        providerAvatarFilePath,
      );

      if (providerAvatarFileExists) {
        await fs.promises.unlink(providerAvatarFilePath);
      }
    }

    provider.avatar = avatarFilename;

    await providersRepository.save(provider);

    return provider;
  }
}

export default UpdateProviderAvatarService;

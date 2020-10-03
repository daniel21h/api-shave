import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateProviderAvatarService from '@modules/providers/services/UpdateProviderAvatarService';

export default class ProviderAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateProviderAvatar = container.resolve(UpdateProviderAvatarService);

    const provider = await updateProviderAvatar.execute({
      provider_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete provider.password;

    return response.json(provider);
  }
}

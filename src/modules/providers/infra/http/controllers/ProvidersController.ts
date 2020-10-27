import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProviderService from '@modules/providers/services/CreateProviderService';
import ListProvidersService from '@modules/providers/services/ListProvidersService';
import { classToClass } from 'class-transformer';

export default class ProvidersController {
  async index(request: Request, response: Response): Promise<Response> {
    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      provider_id: request.user.id,
    });

    return response.json(classToClass(providers));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, password } = request.body;

    const createProvider = container.resolve(CreateProviderService);

    const provider = await createProvider.execute({
      name,
      email,
      phone,
      password,
    });

    delete provider.password;

    return response.json(provider);
  }
}

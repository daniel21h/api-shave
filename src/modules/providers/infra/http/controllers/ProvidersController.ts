import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProviderService from '@modules/providers/services/CreateProviderService';

export default class ProvidersController {
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

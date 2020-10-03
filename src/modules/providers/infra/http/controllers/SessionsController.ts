import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateProvider = container.resolve(AuthenticateProviderService);

    const { provider, token } = await authenticateProvider.execute({
      email,
      password,
    });

    delete provider.password;

    return response.json({ provider, token });
  }
}

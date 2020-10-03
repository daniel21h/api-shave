import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService';
import ProvidersRepository from '@modules/providers/infra/typeorm/repositories/ProvidersRepository';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/user', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

sessionsRouter.post('/provider', async (request, response) => {
  const { email, password } = request.body;

  const providersRepository = new ProvidersRepository();
  const authenticateProvider = new AuthenticateProviderService(
    providersRepository,
  );

  const { provider, token } = await authenticateProvider.execute({
    email,
    password,
  });

  delete provider.password;

  return response.json({ provider, token });
});

export default sessionsRouter;

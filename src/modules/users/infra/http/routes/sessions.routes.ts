import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import AuthenticateProviderService from '@modules/providers/services/AuthenticateProviderService';

const sessionsRouter = Router();

sessionsRouter.post('/user', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

sessionsRouter.post('/provider', async (request, response) => {
  const { email, password } = request.body;

  const authenticateProvider = new AuthenticateProviderService();

  const { provider, token } = await authenticateProvider.execute({
    email,
    password,
  });

  delete provider.password;

  return response.json({ provider, token });
});

export default sessionsRouter;

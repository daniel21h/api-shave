import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';
import AuthenticateProviderService from '../services/AuthenticateProviderService';

const sessionsRouter = Router();

sessionsRouter.post('/user', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

sessionsRouter.post('/provider', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateProvider = new AuthenticateProviderService();

    const { provider, token } = await authenticateProvider.execute({
      email,
      password,
    });

    delete provider.password;

    return response.json({ provider, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;

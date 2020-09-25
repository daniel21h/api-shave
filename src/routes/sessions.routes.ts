import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';
import AuthenticateProviderService from '../services/AuthenticateProviderService';

const sessionsRouter = Router();

sessionsRouter.post('/user', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

sessionsRouter.post('/provider', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateProvider = new AuthenticateProviderService();

    const { provider } = await authenticateProvider.execute({
      email,
      password,
    });

    return response.json({ provider });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;

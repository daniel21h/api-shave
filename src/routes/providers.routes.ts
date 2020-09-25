import { Router } from 'express';

import CreateProviderService from '../services/CreateProviderService';

const providersRouter = Router();

providersRouter.post('/', async (request, response) => {
  try {
    const { name, email, phone, password } = request.body;

    const createProvider = new CreateProviderService();

    const provider = await createProvider.execute({
      name,
      email,
      phone,
      password,
    });

    return response.json(provider);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default providersRouter;

import { Router } from 'express';

import CreateProviderService from '../services/CreateProviderService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, phone, password } = request.body;

    const createUser = new CreateProviderService();

    const user = await createUser.execute({
      name,
      email,
      phone,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;

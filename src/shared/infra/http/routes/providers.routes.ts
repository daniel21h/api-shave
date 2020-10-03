import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateProviderService from '../services/CreateProviderService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UpdateProviderAvatarService from '../services/UpdateProviderAvatarService';

const providersRouter = Router();

const upload = multer(uploadConfig);

providersRouter.post('/', async (request, response) => {
  const { name, email, phone, password } = request.body;

  const createProvider = new CreateProviderService();

  const provider = await createProvider.execute({
    name,
    email,
    phone,
    password,
  });

  delete provider.password;

  return response.json(provider);
});

providersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateProviderAvatar = new UpdateProviderAvatarService();

    const provider = await updateProviderAvatar.execute({
      provider_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete provider.password;

    return response.json(provider);
  },
);

export default providersRouter;

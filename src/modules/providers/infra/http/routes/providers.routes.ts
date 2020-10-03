import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderAvatarController from '../controllers/ProviderAvatarController';

const providersRouter = Router();

const upload = multer(uploadConfig);
const providersController = new ProvidersController();
const providerAvatarController = new ProviderAvatarController();

providersRouter.post('/', providersController.create);

providersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  providerAvatarController.update,
);

export default providersRouter;

import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

const availabilityRouter = Router();

availabilityRouter.use(ensureAuthenticated);

const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

availabilityRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);

availabilityRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default availabilityRouter;

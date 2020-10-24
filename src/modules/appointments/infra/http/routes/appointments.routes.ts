import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';
import UserAppointmentsController from '../controllers/UserAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointments = new ProviderAppointmentsController();
const userAppointments = new UserAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.delete('/', appointmentsController.delete);

appointmentsRouter.get('/me', providerAppointments.index);
appointmentsRouter.get('/me/user', userAppointments.index);

export default appointmentsRouter;

import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import providersRouter from './providers.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/providers', providersRouter);

export default routes;

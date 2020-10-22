import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import providersRouter from '@modules/providers/infra/http/routes/providers.routes';
import sessionsUsersRouter from '@modules/users/infra/http/routes/sessions.routes';
import sessionsProvidersRouter from '@modules/providers/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import availabilityRouter from '@modules/appointments/infra/http/routes/availability.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.use('/users', usersRouter);
routes.use('/userprofile', profileRouter);
routes.use('/password', passwordRouter);

routes.use('/providers', providersRouter);
routes.use('/providers', providersRouter);

routes.use('/availability', availabilityRouter);

routes.use('/sessions', [sessionsUsersRouter, sessionsProvidersRouter]);

export default routes;

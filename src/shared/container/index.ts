import { container } from 'tsyringe';

import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';
import ProvidersRepository from '@modules/providers/infra/typeorm/repositories/ProvidersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IProvidersRepository>(
  'ProvidersRepository',
  ProvidersRepository,
);

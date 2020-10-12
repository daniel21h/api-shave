import { container } from 'tsyringe';

import './providers';

import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ProvidersRepository from '@modules/providers/infra/typeorm/repositories/ProvidersRepository';
import IProvidersRepository from '@modules/providers/repositories/IProvidersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import ProviderTokensRepository from '@modules/providers/infra/typeorm/repositories/ProviderTokensRepository';
import IProviderTokensRepository from '@modules/providers/repositories/IProviderTokensRepository';

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

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IProviderTokensRepository>(
  'ProviderTokensRepository',
  ProviderTokensRepository,
);

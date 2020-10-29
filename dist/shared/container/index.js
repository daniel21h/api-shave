"use strict";

var _tsyringe = require("tsyringe");

require("./providers");

var _AppointmentsRepository = _interopRequireDefault(require("../../modules/appointments/infra/typeorm/repositories/AppointmentsRepository"));

var _UsersRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UsersRepository"));

var _ProvidersRepository = _interopRequireDefault(require("../../modules/providers/infra/typeorm/repositories/ProvidersRepository"));

var _UserTokensRepository = _interopRequireDefault(require("../../modules/users/infra/typeorm/repositories/UserTokensRepository"));

var _ProviderTokensRepository = _interopRequireDefault(require("../../modules/providers/infra/typeorm/repositories/ProviderTokensRepository"));

var _BCryptHashProvider = _interopRequireDefault(require("../../modules/users/providers/HashProvider/implementations/BCryptHashProvider"));

var _NotificationsRepository = _interopRequireDefault(require("../../modules/notifications/infra/typeorm/repositories/NotificationsRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('AppointmentsRepository', _AppointmentsRepository.default);

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('ProvidersRepository', _ProvidersRepository.default);

_tsyringe.container.registerSingleton('UserTokensRepository', _UserTokensRepository.default);

_tsyringe.container.registerSingleton('ProviderTokensRepository', _ProviderTokensRepository.default);

_tsyringe.container.registerSingleton('HashProvider', _BCryptHashProvider.default);

_tsyringe.container.registerSingleton('NotificationsRepository', _NotificationsRepository.default);
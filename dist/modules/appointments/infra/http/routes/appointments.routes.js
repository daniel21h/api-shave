"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/ensureAuthenticated"));

var _AppointmentsController = _interopRequireDefault(require("../controllers/AppointmentsController"));

var _ProviderAppointmentsController = _interopRequireDefault(require("../controllers/ProviderAppointmentsController"));

var _UserAppointmentsController = _interopRequireDefault(require("../controllers/UserAppointmentsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentsRouter = (0, _express.Router)();
const appointmentsController = new _AppointmentsController.default();
const providerAppointments = new _ProviderAppointmentsController.default();
const userAppointments = new _UserAppointmentsController.default();
appointmentsRouter.use(_ensureAuthenticated.default);
appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.delete('/', appointmentsController.delete);
appointmentsRouter.get('/me', providerAppointments.index);
appointmentsRouter.get('/me/user', userAppointments.index);
var _default = appointmentsRouter;
exports.default = _default;
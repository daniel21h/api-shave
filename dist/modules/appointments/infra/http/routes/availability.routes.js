"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/ensureAuthenticated"));

var _ProviderDayAvailabilityController = _interopRequireDefault(require("../controllers/ProviderDayAvailabilityController"));

var _ProviderMonthAvailabilityController = _interopRequireDefault(require("../controllers/ProviderMonthAvailabilityController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const availabilityRouter = (0, _express.Router)();
availabilityRouter.use(_ensureAuthenticated.default);
const providerDayAvailabilityController = new _ProviderDayAvailabilityController.default();
const providerMonthAvailabilityController = new _ProviderMonthAvailabilityController.default();
availabilityRouter.get('/:provider_id/month-availability', providerMonthAvailabilityController.index);
availabilityRouter.get('/:provider_id/day-availability', providerDayAvailabilityController.index);
var _default = availabilityRouter;
exports.default = _default;
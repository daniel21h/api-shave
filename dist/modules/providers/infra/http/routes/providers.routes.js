"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/ensureAuthenticated"));

var _ProvidersController = _interopRequireDefault(require("../controllers/ProvidersController"));

var _ProviderAvatarController = _interopRequireDefault(require("../controllers/ProviderAvatarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const providersRouter = (0, _express.Router)();
const upload = (0, _multer.default)(_upload.default);
const providersController = new _ProvidersController.default();
const providerAvatarController = new _ProviderAvatarController.default();
providersRouter.get('/', _ensureAuthenticated.default, providersController.index);
providersRouter.post('/', providersController.create);
providersRouter.patch('/avatar', _ensureAuthenticated.default, upload.single('avatar'), providerAvatarController.update);
var _default = providersRouter;
exports.default = _default;
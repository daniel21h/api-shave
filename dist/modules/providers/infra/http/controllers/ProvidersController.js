"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateProviderService = _interopRequireDefault(require("../../../services/CreateProviderService"));

var _ListProvidersService = _interopRequireDefault(require("../../../services/ListProvidersService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProvidersController {
  async index(request, response) {
    const listProviders = _tsyringe.container.resolve(_ListProvidersService.default);

    const providers = await listProviders.execute({
      provider_id: request.user.id
    });
    return response.json((0, _classTransformer.classToClass)(providers));
  }

  async create(request, response) {
    const {
      name,
      email,
      phone,
      password
    } = request.body;

    const createProvider = _tsyringe.container.resolve(_CreateProviderService.default);

    const provider = await createProvider.execute({
      name,
      email,
      phone,
      password
    });
    delete provider.password;
    return response.json(provider);
  }

}

exports.default = ProvidersController;
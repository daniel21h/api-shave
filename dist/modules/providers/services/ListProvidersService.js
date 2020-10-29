"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IProvidersRepository = _interopRequireDefault(require("../repositories/IProvidersRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ListProvidersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProvidersRepository.default === "undefined" ? Object : _IProvidersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListProvidersService {
  constructor(providersRepository) {
    this.providersRepository = providersRepository;
  }

  async execute({
    provider_id
  }) {
    const providers = await this.providersRepository.findAllProviders({
      except_provider_id: provider_id
    });
    return providers;
  }

}) || _class) || _class) || _class) || _class);
var _default = ListProvidersService;
exports.default = _default;
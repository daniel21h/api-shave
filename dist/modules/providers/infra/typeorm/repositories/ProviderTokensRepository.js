"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProviderToken = _interopRequireDefault(require("../entities/ProviderToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderTokensRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_ProviderToken.default);
  }

  async findByToken(token) {
    const userToken = await this.ormRepository.findOne({
      where: {
        token
      }
    });
    return userToken;
  }

  async generate(provider_id) {
    const providerToken = this.ormRepository.create({
      provider_id
    });
    await this.ormRepository.save(providerToken);
    return providerToken;
  }

}

var _default = ProviderTokensRepository;
exports.default = _default;
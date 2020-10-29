"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Provider = _interopRequireDefault(require("../entities/Provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProvidersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Provider.default);
  }

  async findById(id) {
    const provider = await this.ormRepository.findOne(id);
    return provider;
  }

  async findByEmail(email) {
    const provider = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return provider;
  }

  async findAllProviders({
    except_provider_id
  }) {
    let providers;

    if (except_provider_id) {
      providers = await this.ormRepository.find({
        where: {
          id: (0, _typeorm.Not)(except_provider_id)
        }
      });
    } else {
      providers = await this.ormRepository.find();
    }

    return providers;
  }

  async create(providerData) {
    const provider = await this.ormRepository.create(providerData);
    await this.ormRepository.save(provider);
    return provider;
  }

  async save(provider) {
    return this.ormRepository.save(provider);
  }

}

var _default = ProvidersRepository;
exports.default = _default;
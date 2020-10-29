"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IStorageProvider = _interopRequireDefault(require("../../../shared/container/providers/StorageProvider/models/IStorageProvider"));

var _IProvidersRepository = _interopRequireDefault(require("../repositories/IProvidersRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateProviderAvatarService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('StorageProvider')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IProvidersRepository.default === "undefined" ? Object : _IProvidersRepository.default, typeof _IStorageProvider.default === "undefined" ? Object : _IStorageProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class UpdateProviderAvatarService {
  constructor(providersRepository, storageProvider) {
    this.providersRepository = providersRepository;
    this.storageProvider = storageProvider;
  }

  async execute({
    provider_id,
    avatarFilename
  }) {
    const provider = await this.providersRepository.findById(provider_id);

    if (!provider) {
      throw new _AppError.default('Only authenticated providers can change avatar.', 401);
    }

    if (provider.avatar) {
      await this.storageProvider.deleteFile(provider.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);
    provider.avatar = filename;
    await this.providersRepository.save(provider);
    return provider;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = UpdateProviderAvatarService;
exports.default = _default;
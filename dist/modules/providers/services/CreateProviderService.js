"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = require("bcryptjs");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _tsyringe = require("tsyringe");

var _IProvidersRepository = _interopRequireDefault(require("../repositories/IProvidersRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateProviderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProvidersRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProvidersRepository.default === "undefined" ? Object : _IProvidersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateProviderService {
  constructor(providersRepository) {
    this.providersRepository = providersRepository;
  }

  async execute({
    name,
    email,
    phone,
    password
  }) {
    const checkUserExists = await this.providersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new _AppError.default('Email address already used.');
    }

    const hashedPassword = await (0, _bcryptjs.hash)(password, 8);
    const provider = await this.providersRepository.create({
      name,
      email,
      phone,
      password: hashedPassword
    });
    return provider;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateProviderService;
exports.default = _default;
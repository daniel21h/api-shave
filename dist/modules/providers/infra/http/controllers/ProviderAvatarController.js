"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _UpdateProviderAvatarService = _interopRequireDefault(require("../../../services/UpdateProviderAvatarService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProviderAvatarController {
  async update(request, response) {
    const updateProviderAvatar = _tsyringe.container.resolve(_UpdateProviderAvatarService.default);

    const provider = await updateProviderAvatar.execute({
      provider_id: request.user.id,
      avatarFilename: request.file.filename
    });
    delete provider.password;
    return response.json(provider);
  }

}

exports.default = ProviderAvatarController;
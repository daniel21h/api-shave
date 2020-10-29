"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

var _classTransformer = require("class-transformer");

var _ListUsersService = _interopRequireDefault(require("../../../services/ListUsersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersController {
  async index(request, response) {
    const listUsers = _tsyringe.container.resolve(_ListUsersService.default);

    const users = await listUsers.execute({
      user_id: request.user.id
    });
    return response.json((0, _classTransformer.classToClass)(users));
  }

  async create(request, response) {
    const {
      name,
      email,
      phone,
      password
    } = request.body;

    const createUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await createUser.execute({
      name,
      email,
      phone,
      password
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = UsersController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListUserAppointmentsService = _interopRequireDefault(require("../../../services/ListUserAppointmentsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserAppointmentsController {
  async index(request, response) {
    const user_id = request.user.id;

    const listUserAppointments = _tsyringe.container.resolve(_ListUserAppointmentsService.default);

    const appointments = await listUserAppointments.execute(user_id);
    return response.json(appointments);
  }

}

exports.default = UserAppointmentsController;
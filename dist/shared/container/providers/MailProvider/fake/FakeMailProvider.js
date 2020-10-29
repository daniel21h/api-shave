"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FakeMailProvider {
  constructor() {
    this.messages = [];
  }

  async sendMail(to, body) {
    this.messages.push({
      to,
      body
    });
  }

}

exports.default = FakeMailProvider;
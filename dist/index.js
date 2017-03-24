'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('./request');

var _constructor = require('./constructor');

var _constructor2 = _interopRequireDefault(_constructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AJAX = {
  httpRequest: (0, _constructor2.default)(),
  request: _request.request,
  get: _request.get,
  post: _request.post,
  put: _request.put,
  del: _request.del
};
exports.default = AJAX;
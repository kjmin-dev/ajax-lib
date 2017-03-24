'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AJAX = undefined;

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _constructor = require('./constructor');

var _constructor2 = _interopRequireDefault(_constructor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AJAX = {
  httpRequest: (0, _constructor2.default)(),
  request: _request2.default.request,
  get: _request2.default.get,
  post: _request2.default.post,
  put: _request2.default.put,
  del: _request2.default.del
};
exports.AJAX = AJAX;
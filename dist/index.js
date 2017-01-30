'use strict';

var r = require('./request');
var ctor = require('./constructor');

var AJAX = {
  httpRequest: ctor(),
  request: r.request,
  get: r.get,
  post: r.post,
  put: r.put,
  del: r.del
};

module.exports.AJAX = AJAX;
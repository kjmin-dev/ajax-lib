'use strict';
const r = require('./request');
const ctor = require('./constructor');

const AJAX = {
  httpRequest : ctor(),
  request : r.request,
  get : r.get,
  post : r.post,
  put : r.put,
  del : r.del,
};

module.exports.AJAX = AJAX;

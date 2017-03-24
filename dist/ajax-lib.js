/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(2);

var _constructor = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function ctor() {
  try {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      // is IE
      return new ActiveXObject("Microsoft.XMLHTTP");
    }
  } catch (e) {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"request\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  }
  return null;
}

exports.default = ctor;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function optimizeCB(uri, method, opts, cb) {
  //invalid uri
  if (typeof uri !== 'string') {
    throw new TypeError('uri must be String: ' + uri);
  }
  // no options (cb only) --
  if (typeof cb === 'undefined') {
    // invalid cb
    if (typeof opts !== 'function') {
      throw new TypeError('callback must be function: ' + opts);
    }
    return [uri, { method: method, data: {} }, opts];
  }
  // have options, invalid cb
  else if (typeof cb !== 'function') {
      throw new TypeError('callback must be function: ' + cb);
    }

  // have options, invalid options
  if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') {
    throw new TypeError('options muse be object{}: ' + opts);
  }

  return [uri, Object.assign({
    data: {}
  }, opts, {
    method: method
  }), cb];
}

function request(uri, opts, cb) {
  var httpRequest = this.httpRequest;
  var isOptions = typeof cb === 'undefined';
  var options = isOptions ? {} : opts;

  if ((typeof httpRequest === 'undefined' ? 'undefined' : _typeof(httpRequest)) === 'object') {
    // web
    httpRequest.open(options.method, uri, true);
    httpRequest.setRequestHeader("Content-Type", options.contentType ? options.contentType : "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(options.data));
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == httpRequest.DONE) {
        if (httpRequest.status === 200) {
          cb(null, httpRequest.responseText);
        } else {
          cb(httpRequest.status, httpRequest.responseText);
        }
      }
    };
  } else if (typeof httpRequest === 'function') {
    httpRequest(Object.assign({ uri: uri }, options), function (err, res, body) {
      if (err) {
        cb(err, res);
      }
      cb(null, res);
    });
  }
}

function all(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, opts.method || 'GET', opts, cb));
}

function get(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'GET', opts, cb));
}

function post(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'POST', opts, cb));
}

function put(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'PUT', opts, cb));
}

function del(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'DELETE', opts, cb));
}

exports.request = request;
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const ajax = __webpack_require__(0).AJAX

if(typeof window === 'object') window.ajax = ajax
else module.exports = ajax


/***/ })
/******/ ]);
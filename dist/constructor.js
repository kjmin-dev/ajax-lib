'use strict';

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
    return require('request');
  }
  return null;
}

exports.default = ctor;
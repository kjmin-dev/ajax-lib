'use strict';

function ctor() {
  try {
    if (typeof module !== 'undefined' && module.exports) {
      // is Node.js
      return require('request');
    } else if (window.ActiveXObject) {
      // is IE
      return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    }
  } catch (e) {
    return null;
  }
}

module.exports = ctor;
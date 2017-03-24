const ajax = require('./dist').AJAX

if(typeof window === 'object') window.ajax = ajax
else module.exports = ajax

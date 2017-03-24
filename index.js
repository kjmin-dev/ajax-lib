const ajax = require('./dist')

if(typeof window === 'object') window.ajax = ajax.default
else module.exports = ajax

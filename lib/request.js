'use strict'

function optimizeCB(uri, method, opts, cb) {
  //invalid uri
  if(typeof uri !== 'string') {
    throw new TypeError(`uri must be String: ${uri}`)
  }
  // no options (cb only) --
  if(typeof cb === 'undefined') {
    // invalid cb
    if(typeof opts !== 'function') {
      throw new TypeError(`callback must be function: ${opts}`)
    }
    return [uri, {method:method, data:{}}, opts];
  }
  // have options, invalid cb
  else if (typeof cb !== 'function') {
    throw new TypeError(`callback must be function: ${cb}`)
  }

  // have options, invalid options
  if(typeof opts !== 'object') {
    throw new TypeError(`options muse be object{}: ${opts}`)
  }

  return [
    uri,
    Object.assign(
      {
        data: {}
      },
      opts,
      {
        method:method
      }
    ),
    cb
  ]
}

function request(uri, opts, cb) {
  const httpRequest = this.httpRequest
  const isOptions = typeof cb === 'undefined'
  const options = isOptions ? {} : opts

  if(typeof httpRequest === 'object') {
    // web
    httpRequest.open(options.method, uri, true)
    httpRequest.setRequestHeader("Content-Type", options.contentType ? options.contentType : "application/json;charset=UTF-8")
    httpRequest.send(JSON.stringify(options.data))
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == httpRequest.DONE ) {
        if(httpRequest.status === 200) {
          cb(null, httpRequest.responseText)
        }
        else {
          cb(httpRequest.status, httpRequest.responseText)
        }
      }
    }
  }
  else if(typeof httpRequest === 'function') {
    httpRequest(Object.assign({uri : uri}, options), (err, res, body) => {
      if(err) {
        cb(err, res)
      }
      cb(null, res)
    });
  }
}

function all(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, opts.method || 'GET', opts, cb))
}

function get(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'GET', opts, cb))
}

function post(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'POST', opts, cb))
}

function put(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'PUT', opts, cb))
}

function del(uri, opts, cb) {
  request.apply(this, optimizeCB(uri, 'DELETE', opts, cb))
}

export {
  request,
  get,
  post,
  put,
  del
}

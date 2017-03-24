'use strict'

import r from './request'
import ctor from './constructor'

const AJAX = {
  httpRequest : ctor(),
  request : r.request,
  get : r.get,
  post : r.post,
  put : r.put,
  del : r.del,
}
export { AJAX }

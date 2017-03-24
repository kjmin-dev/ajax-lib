'use strict'

import {
  request,
  get,
  post,
  put,
  del
} from './request'
import ctor from './constructor'

const AJAX = {
  httpRequest : ctor(),
  request,
  get,
  post,
  put,
  del
}
export default AJAX

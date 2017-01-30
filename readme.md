[JavaScript, Node.js] ajax-lib

# ajax-lib

## About
### ajax-lib is simplified ajax functions to call it easily

## Features
#### 1. Dependencies on only one package (request.js)
#### 2. Experimental source code(purpose for studying)
#### 3. Currently in progress (incomplete)


### install package
	npm i -save ajax-lib

## Examples

### request with method
	var ajax = require('ajax-lib')

    ajax.get('http://google.com', function(err, response) {
    	//do something with response...
    })

    ajax.post('http://google.com', function(err, response) {
    	//do something with response...
    })

    ajax.put('http://google.com', function(err, response) {
    	//do something with response...
    })

    ajax.del('http://google.com', function(err, response) {
    	//do something with response...
    })

### request without method & options
	var ajax = require('ajax-lib')
	ajax.request('http://google.com', function(err, response) {
    	//do something with response...
    })
	ajax.request('http://google.com', {data:{}}, function(err, response) {
			//without method => GET default
	    //do something with response...
	  })
#### you can also pass the options with method & data

### request with data
#### the order of the arguments must be url, options, callback
	var ajax = require('ajax-lib')
	ajax.request('http://google.com', {
      method:"POST",
      data: {
      	formData: {
        },
        exampleData: {
        }
      }
    },function(err, response) {
    	//do something with response...
    })

## \*Notice*
#### If the option does not contain a method type when you using request method, GET default value will be requested.

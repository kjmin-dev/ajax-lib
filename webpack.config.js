const { resolve } = require('path')
module.exports = {
     entry: './index.js',
     output: {
         path: resolve(__dirname, 'dist'),
         filename: 'ajax-lib.js'
     },
     resolve: {
      modules: ['core'] // also 'node_modules'
    },
    target: 'web'
 }

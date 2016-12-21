'use strict'

var riot = require('riot')
var extend = require('extend-shallow')

exports.name = 'riotjs'
exports.inputFormats = ['riot', 'riotjs']
exports.outputFormat = 'js'

exports.render = function (str, options, locals) {
  return riot.compile(str, extend({}, options, locals))
}

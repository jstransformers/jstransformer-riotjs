'use strict';

var riotjs = require('riotjs');
var merge = require('merge-deep')

exports.name = 'riotjs';
exports.inputFormats = ['html', 'riotjs'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  return riotjs.render(str, merge({}, options, locals))
};

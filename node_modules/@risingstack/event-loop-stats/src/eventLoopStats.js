var binary = require('@risingstack/node-pre-gyp');
var path = require('path');
var bindingPath = binary.find(path.resolve(path.join(__dirname, '..', 'package.json')));
var eventLoopStats = require(bindingPath);

exports.sense = eventLoopStats.sense;

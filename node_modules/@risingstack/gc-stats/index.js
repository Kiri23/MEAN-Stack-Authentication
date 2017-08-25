'use strict'
var binary = require('@risingstack/node-pre-gyp');
var path = require('path');
var bindingPath = binary.find(path.resolve(path.join(__dirname, 'package.json')));
var binding = require(bindingPath);
var gcEmitter
var EventEmitter = require('events').EventEmitter;

function gcStats() {
	if (this instanceof gcStats){
        	throw Error('gc-stats no longer exports a constructor. Call without the `new` keyword');
   	}
	if(!gcEmitter) {
		gcEmitter = new EventEmitter();
		binding.afterGC(function(stats) {
			gcEmitter.emit('data', stats);
			gcEmitter.emit('stats', stats);
		});
	}
	return gcEmitter;
}

module.exports = gcStats;

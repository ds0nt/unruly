// The Least App Configuration
// @author Daniel Sont

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var debug = (0, _debug2['default'])('unruly');
var file = (0, _path.join)((0, _path.dirname)(require.main.filename), 'app.config');
var block = _fs2['default'].readFileSync(file, 'UTF-8');

var lines = block.split("\n").map(function (x) {
	return x.trim();
}).map(function (x) {
	var matches = x.match(/([^\s*=]*)\s*=\s*(.*)/);
	if (!matches) return false;
	return [matches[1], matches[2]];
}).filter(function (x) {
	return x && x[0].length > 0;
}).map(function (_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var k = _ref2[0];
	var v = _ref2[1];
	return [k.replace(/[-\s]/g, '_'), v];
}).map(function (_ref3) {
	var _ref32 = _slicedToArray(_ref3, 2);

	var k = _ref32[0];
	var v = _ref32[1];
	return [k.toLowerCase(), k.toUpperCase(), v];
});

var config = {};
var envify = {};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 3);

		var c = _step$value[0];
		var e = _step$value[1];
		var value = _step$value[2];

		if (typeof process.env[e] !== 'undefined') {
			config[c] = process.env[e];
		} else {
			config[c] = value;
		}
		debug(c, config[c]);
		envify[e] = config[c];
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

config.file = config;
config.envify = envify;
config.bashify = function () {
	return lines.map(function (x) {
		return console.log('export ' + x[1] + '=' + config[x[0]]);
	});
};

exports['default'] = config;
module.exports = exports['default'];

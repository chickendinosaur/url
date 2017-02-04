'use strict';

module.exports = {
	parse: require('./parse'),
	querystring: {
		parse: require('./query-string/parse')
	}
};

module.exports.default = module.exports;

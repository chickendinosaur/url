require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const parse = require('../lib/parse');
const mockURLs = require('../mocks/urls');

/*
Setup.
*/

var urlStr = mockURLs.full;

/*
Teardown.
*/

function teardown() {}

suite
	.add('parse(url, false)', function () {
		parse(urlStr, false);
	})
	.add('parse(url, true)', function () {
		parse(urlStr, true, false);
	})
	.add('parse(url, true, true)', function () {
		parse(urlStr, true, true);
	})
	.on('cycle', function (event) {
		console.log(String(event.target));
		teardown();
	})
	.on('complete', function () {
		console.log('Fastest is ' + this.filter('fastest').map('name'));

		if (typeof window === 'object') {
			window.close();
		}
	})
	// Run async
	.run({ 'async': false });

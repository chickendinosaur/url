require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const urlParser = require('fast-url-parser');
const mockURLs = require('../mocks/urls');

/*
Setup.
*/

/*
Teardown.
*/

function teardown() {}

suite
	.add('fast-url-parser.parse(url, false)', function () {
		urlParser.parse(mockURLs.full, false);
	})
	.add('fast-url-parser.parse(url, true)', function () {
		urlParser.parse(mockURLs.full, true);
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

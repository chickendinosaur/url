require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const UrlParser = require('url');
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
		UrlParser.parse(urlStr, false);
	})
	.add('parse(url, true)', function () {
		UrlParser.parse(urlStr, true);
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

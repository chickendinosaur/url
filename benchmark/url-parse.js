require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const parseURL = require('../lib/url-parse');
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
	.add('parseURL(url, false)', function () {
		parseURL(urlStr, false);
	})
	.add('parseURL(url, true)', function () {
		parseURL(urlStr, true);
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

require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const queryStringParse = require('../../lib/query-string/parse');
const mockURLs = require('../../mocks/urls');

/*
Setup.
*/

var queryStr = mockURLs.query;

/*
Teardown.
*/

function teardown() {}

console.log('');
console.log('Benchmark');
console.log('');
console.log('benchmark/query-string/parse.js');
console.log('');

suite
	.add('parse(url, false)', function () {
		queryStringParse(queryStr, false);
	})
	.add('parse(url, true)', function () {
		queryStringParse(queryStr, true);
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

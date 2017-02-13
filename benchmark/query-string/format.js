require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const format = require('../../lib/query/format');
const parsedQuery = require('../../mocks/parsedQuery');

/*
Setup.
*/

/*
Teardown.
*/

function teardown() {}

console.log('');
console.log('Benchmark');
console.log('');
console.log('benchmark/query/format.js');
console.log('');

suite
	.add('format(parsedQuery, false)', function () {
		format(parsedQuery, false);
	})
	.add('format(parsedQuery, true)', function () {
		format(parsedQuery, true);
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

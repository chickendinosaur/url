require('lodash');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const isBrowser = typeof window === 'object';

if (isBrowser) {
	window.Benchmark = Benchmark;
}

/*
Setup
*/

const format = require('./format');
const parsedQuery = require('../../mocks/parsedQuery');

/*
Benchmark
*/

console.log();
console.log('url/query/format');
console.log();

suite
	.add('format(parsedQuery, false)', function () {
		format(parsedQuery, false);
	})
	.add('format(parsedQuery, true)', function () {
		format(parsedQuery, true);
	})
	.on('cycle', function (event) {
		var output = String(event.target);
		output = output.substring(0, output.indexOf('ops/sec') + 7);
		console.log('\x1b[33m%s\x1b[0m', output);
	})
	.on('complete', function () {
		if (isBrowser) {
			window.close();
		}
	})
	// Run async
	.run({ 'async': false });

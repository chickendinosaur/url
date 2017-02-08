'use strict';

const tap = require('tap');
const test = tap.test;
const beforeEach = tap.beforeEach;
const afterEach = tap.afterEach;
const teardown = tap.teardown;

const format = require('../../lib/query-string/format');
const parsedQuery = require('../../mocks/parsedQuery');
const mocks = require('../../mocks/urls');

/*
Setup.
*/

// Call the supplied function before every subsequent descendent test.
beforeEach(function (done) {
	done();
});

// Call the supplied function after every subsequent descendent test.
afterEach(function (done) {
	done();
});

// Run the supplied function when t.end() is called, or when the plan is met.
teardown(function () {});

test('format(queryString, true)', {
	todo: false
}, function (t) {
	let queryString = format(parsedQuery, true);
	t.equal(queryString, mocks.query, 'Generate query string from object literal.');
	t.end();
});

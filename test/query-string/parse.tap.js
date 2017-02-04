'use strict';

const tap = require('tap');
const test = tap.test;
const beforeEach = tap.beforeEach;
const afterEach = tap.afterEach;
const teardown = tap.teardown;

const parseQueryString = require('../../lib/query-string/parse');
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

test('parse(url, true)', {
	todo: false
}, function (t) {
	let queryParams = parseQueryString(mocks.query, false);
	t.equal(mocks.parsedQuery.name, queryParams.name, 'param-transfered');
	t.equal(mocks.parsedQuery.item, queryParams.item, 'param-transfered');
	t.end();
});

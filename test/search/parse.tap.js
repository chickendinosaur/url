'use strict';

const tap = require('tap');
const test = tap.test;
const beforeEach = tap.beforeEach;
const afterEach = tap.afterEach;
const teardown = tap.teardown;

const parseSearchString = require('../../lib/search/parse');
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

test('parse(searchString, true)', {
	todo: false
}, function (t) {
	let queryParams = parseSearchString(mocks.search, false);
	t.equal(parsedQuery.name, queryParams.name, 'param-transfered');
	t.equal(parsedQuery.item, queryParams.item, 'param-transfered');
	t.end();
});

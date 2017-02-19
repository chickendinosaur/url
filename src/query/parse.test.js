'use strict';

const tape = require('tape');
const tapes = require('tapes');
const test = tapes(tape, {
	delimiter: '->'
});

/*
Setup
*/

const parseQueryString = require('./parse');
const mocks = require('../../mocks/urls');
const parsedQuery = require('../../mocks/parsedQuery');

/*
Test
*/

test('url/query', function (t) {

	/*
	beforeEach
	*/

	t.beforeEach(function (t) {
		t.end();
	});

	/*
	afterEach
	*/

	t.afterEach(function (t) {
		t.end();
	});

	/*
	Tests
	*/

	t.test('.parse', function (t) {
		let queryParams = parseQueryString(mocks.query, false);
		t.equal(parsedQuery.name, queryParams.name, 'param-transfered');
		t.equal(parsedQuery.item, queryParams.item, 'param-transfered');
		t.end();
	});

	t.end();
});

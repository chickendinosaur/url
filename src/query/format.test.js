'use strict';

const tape = require('tape');
const tapes = require('tapes');
const test = tapes(tape, {
	delimiter: '->'
});

/*
Setup
*/

const format = require('./format');
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

	t.test('.format', function (t) {
		let queryString = format(parsedQuery, true);
		t.equal(queryString, mocks.query, 'Generate query string from object literal.');
		t.end();
	});

	t.end();
});

'use strict';

const tape = require('tape');
const tapes = require('tapes');
const test = tapes(tape, {
	delimiter: '->'
});

/*
Setup
*/

const parseURL = require('./parse');
const mockUrls = require('../mocks/urls');

/*
Test
*/

test('url', function (t) {

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
		let urlObj = parseURL(mockUrls.full, true);

		t.equal(urlObj.href, mockUrls.full, 'url1-href');
		t.equal(urlObj.protocol, 'http:', 'url1-protocol');
		t.equal(urlObj.auth, 'joe:smith', 'url1-auth');
		t.equal(urlObj.host, 'mail.google.com:80', 'url1-host');
		t.equal(urlObj.port, '80', 'url1-port');
		t.equal(urlObj.pathname, '/a/b/c/', 'url1-pathname');
		t.equal(urlObj.search, '?item=1&name=joe', 'url1-search');
		t.equal(urlObj.hash, '#pageLocation', 'url1-hash');
		t.end();
	});

	t.end();
});

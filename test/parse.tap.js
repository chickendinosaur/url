'use strict';

const tap = require('tap');
const test = tap.test;
const beforeEach = tap.beforeEach;
const afterEach = tap.afterEach;
const teardown = tap.teardown;

const parseURL = require('../lib/parse');
const mockUrls = require('../mocks/urls');

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

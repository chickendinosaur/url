'use strict';

const test = require('tape');
const parseURL = require('../../lib/url-parse');
const mockUrls = require('../../mocks/urls');
const url = require('url');

test('parse - full url \w query parsing', function (assert) {
	var testURL = 'u:p@a.b.c/?';
	console.log('url');
	console.log(url.parse(testURL, false, true));
	console.log('parseURL');
	console.log(parseURL(testURL, false, true));

	let urlObj = parseURL(mockUrls.full, true);

	var queryObjMirror = JSON.stringify({
		item: '1',
		name: 'joe'
	});

	assert.equal(urlObj.href, mockUrls.full, 'url1-href');
	assert.equal(urlObj.protocol, 'http:', 'url1-protocol');
	assert.equal(urlObj.auth, 'joe:smith', 'url1-auth');
	assert.equal(urlObj.host, 'mail.google.com:80', 'url1-host');
	assert.equal(urlObj.port, '80', 'url1-port');
	assert.equal(urlObj.pathname, '/a/b/c/', 'url1-pathname');
	assert.equal(JSON.stringify(urlObj.query), queryObjMirror, 'url1-query');
	assert.equal(urlObj.search, '?item=1&name=joe', 'url1-search');
	assert.equal(urlObj.hash, '#pageLocation', 'url1-hash');

	assert.end();
});

test('parse - full url \wo query parsing', function (assert) {
	let urlObj = parseURL(mockUrls.full, false);

	assert.equal(urlObj.query, 'item=1&name=joe', 'url1-query');

	assert.end();
});

test('parse - no path', function (assert) {
	let urlObj = parseURL(mockUrls.noPath, false);

	assert.equal(urlObj.href, mockUrls.noPath, 'url1-href');
	assert.equal(urlObj.protocol, 'http:', 'url1-protocol');
	assert.equal(urlObj.auth, 'joe:smith', 'url1-auth');
	assert.equal(urlObj.host, 'mail.google.com:80', 'url1-host');
	assert.equal(urlObj.port, '80', 'url1-port');
	assert.equal(urlObj.pathname, '/', 'url1-pathname');
	assert.equal(urlObj.query, 'item=1&name=joe', 'url1-query');
	assert.equal(urlObj.search, '?item=1&name=joe', 'url1-search');
	assert.equal(urlObj.hash, '#pageLocation', 'url1-hash');

	assert.end();
});

test('parse - no hash', function (assert) {
	let urlObj = parseURL(mockUrls.noHash, false);

	assert.equal(urlObj.href, mockUrls.noHash, 'url1-href');
	assert.equal(urlObj.protocol, 'http:', 'url1-protocol');
	assert.equal(urlObj.auth, 'joe:smith', 'url1-auth');
	assert.equal(urlObj.host, 'mail.google.com:80', 'url1-host');
	assert.equal(urlObj.port, '80', 'url1-port');
	assert.equal(urlObj.pathname, '/a/b/c/', 'url1-pathname');
	assert.equal(urlObj.query, 'item=1&name=joe', 'url1-query');
	assert.equal(urlObj.search, '?item=1&name=joe', 'url1-search');
	assert.equal(urlObj.hash, null, 'url1-hash');

	assert.end();
});

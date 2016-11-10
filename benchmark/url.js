require('lodash');
Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const UrlParser = require('url');
const mockURLs = require('../mocks/urls');

/*
Setup.
*/

var urlObj = {
	protocol: 'http:',
	slashes: true,
	auth: 'joe:smith',
	host: 'mail.google.com:80',
	port: '80',
	hostname: 'mail.google.com',
	hash: '#pageLocation',
	search: '?item=1&name=joe',
	query: { item: '1', name: 'joe' },
	pathname: '/a/b/c/',
	path: '/a/b/c/?item=1&name=joe',
	href: 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation'
};

var urlStr = mockURLs.full;

/*
Teardown.
*/

function teardown() {}

suite
	.add('url.parse(url, false)', function () {
		UrlParser.parse(urlStr, false);
	})
	.add('url.parse(url, true)', function () {
		UrlParser.parse(urlStr, true);
	})
	.add('url.format(urlStr)', function () {
		UrlParser.format(urlStr);
	})
	.add('url.format(urlObj)', function () {
		UrlParser.format(urlObj);
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

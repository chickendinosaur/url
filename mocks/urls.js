'use strict';

module.exports = {
	full: 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation',
	noQuery: 'http://joe:smith@mail.google.com:80/a/b/c/#pageLocation',
	noPath: 'http://joe:smith@mail.google.com:80/?item=1&name=joe#pageLocation',
	noProtocol: 'joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation',
	noHash: 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe',
	noauth: 'http://mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation',
	query: '?item=1&name=joe',
	parsedQuery: {
		item: '1',
		name: 'joe'
	}
};

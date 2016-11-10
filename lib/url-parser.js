'use strict';

function Url() {
	this.protocol = null; // http
	this.slashes = null;
	this.auth = null; // username=password
	this.host = null; // subdomain.domain.com=port
	this.port = null; // 80
	this.hostname = null;
	this.hash = null; // someplace
	this.search = null; // ?item=1&name=joe#someplace
	this.query = null; // item=1&name=joe#someplace
	this.pathname = null; // /a/b/c/d/
	this.path = null;
	this.href = null; // http://username:password@subdomain.domain.com:port/a/b/c/d/?item=1&name=joe#someplace
}

module.exports = {
	parse: function (url, parseQueryString) {
		var urlObj = new Url();
		var index = 0;
		var indexPosition = 0;

		index = url.indexOf('://');
		if (index >= 0) {
			urlObj.protocol = url.substring(0, index + 1);
			urlObj.slashes = true;
			indexPosition = index + 3;
		}

		// Auth.
		if (urlObj.protocol !== null && urlObj.slashes === true) {
			index = url.indexOf('@', indexPosition);
			if (index >= 0) {
				urlObj.auth = url.substring(indexPosition, index);
				indexPosition = index + 1;
			}
		}

		// Host.
		index = url.indexOf('/', indexPosition);
		if (index >= 0) {
			urlObj.host = url.substring(indexPosition, index);

			indexPosition = index + 1;

			// Hash.
			var hashIndex = url.indexOf('#', indexPosition);
			if (hashIndex >= 0) {
				urlObj.hash = url.substring(hashIndex);
			}

			// Search.
			// Query.
			var queryIndex = url.indexOf('?', indexPosition);
			if (queryIndex >= 0) {
				var query = url.substring(queryIndex + 1, hashIndex >= 0 ? hashIndex : url.length);
				var queryLen = query.length;
				urlObj.search = '?' + query;

				if (queryLen > 0) {
					if (parseQueryString === true) {
						// Parse query string.
						var queryParams = {};
						var queryIndexIter = 0;
						var currPropChar = '';
						var propQueue = '';
						var currPropName;

						while (queryIndexIter < queryLen) {
							currPropChar = query.charAt(queryIndexIter);

							if (currPropChar !== '=' && currPropChar !== '&' && currPropChar !== '#') {
								propQueue += currPropChar;
							}

							if (currPropChar === '=') {
								currPropName = propQueue;
								propQueue = '';
							} else if (currPropChar === '&' || currPropChar === '#' || queryIndexIter === queryLen - 1) {
								queryParams[currPropName] = propQueue;
								propQueue = '';
							}

							++queryIndexIter;
						}

						urlObj.query = queryParams;
					} else {
						// Store query string as normal.
						urlObj.query = query;
					}
				}
			}

			// Pathname.
			var endIndex = queryIndex >= 0 ? queryIndex : hashIndex >= 0 ? hashIndex : url.length;
			urlObj.pathname = url.substring(index, endIndex);
			// Path
			urlObj.path = urlObj.pathname + urlObj.search || '';
		} else if (urlObj.protocol !== null) {
			urlObj.host = url.substring(indexPosition);
		}

		// Port.
		// Hostname.
		if (urlObj.protocol !== null) {
			index = urlObj.host.indexOf(':'); // Has port.
			if (index >= 0) {
				urlObj.port = urlObj.host.substring(index + 1);
				urlObj.hostname = urlObj.host.substring(0, index);
			} else {
				urlObj.hostname = urlObj.host;
			}
		} else {
			// The path becomes the entire url minus the hash when there's no protocol.
			urlObj.pathname = urlObj.host.substring(0, index) + urlObj.pathname;
			urlObj.path = urlObj.pathname + urlObj.search;
			urlObj.host = null;
		}

		urlObj.href = url;

		return urlObj;
	}
};
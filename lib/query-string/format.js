/**
@license
The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

/*
@module query-string/format
@param {Object} queryObj
@param {Boolean} encode - If set to true the output will be formatted into a suitable HTML encoded string.
@return {String}
*/
module.exports = function (queryObj, encode) {
	if (encode !== false) {
		encode = true;
	}

	var queryString = '';
	var keys = Object.keys(queryObj);
	var n = keys.length;

	if (n > 0) {
		queryString += keys[0] + '=' + queryObj[keys[0]];

		var i = 1;
		while (i < n) {
			queryString += '&' + keys[i] + '=' + queryObj[keys[i]];

			i++;
		}

		if (encode === true) {
			queryString = encodeURI(queryString);
		}
	}

	return queryString;
};

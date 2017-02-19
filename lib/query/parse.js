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

module.exports = function (queryString, decode) {
	if (decode !== false) {
		decode = true;
	}

	// Convert html encoded characters.
	if (decode === true) {
		queryString = decodeURIComponent(queryString);
	}

	var queryParams = {};
	var queryIndexIter = 0;
	var queryLen = queryString.length;
	var currPropChar;
	var propQueue = '';
	var currPropName;

	while (queryIndexIter < queryLen) {
		currPropChar = queryString.charAt(queryIndexIter);

		if (currPropChar !== '=' && currPropChar !== '&') {
			propQueue += currPropChar;
		}

		if (currPropChar === '=') {
			currPropName = propQueue;
			propQueue = '';
		} else if (currPropChar === '&' || queryIndexIter === queryLen - 1) {
			queryParams[currPropName] = propQueue;
			propQueue = '';
		}

		++queryIndexIter;
	}

	return queryParams;
};
Url parsing method meant to mimic node's parse() method response object and parameters (no plan to add the slashesDenoteHost parameter) from the 'url' package. It takes a very minimalist approach to supply the least amount of overhead, garbage, and performance. I was after file size for browser use.  

### Rules
* Assumes the hash is at the end of the url.

[Node's 'url' API reference](https://nodejs.org/docs/latest/api/url.html)

---  

# Specs  

## Performance  

Test used: 
```javascript
var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
```

### @chickendinosaur/url  
#### parse(url, false) x 1,869,033 ops/sec  
#### parse(url, true, false) x 704,786 ops/sec  
#### parse(url, true, true) x 643,198 ops/sec  

Test used: 
```javascript
var queryString = '?item=1&name=joe';
```

### @chickendinosaur/queryString/query-string/parse  
#### queryStringParse(queryString, false) x 1,387,553 ops/sec  
#### queryStringParse(queryString, true) x 1,164,266 ops/sec  

---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/url

## Usage

### url.parse

```javascript
const parseURL = require('@chickendinosaur/url');

var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
console.log(parseURL(url, true, true));

// Output

/*
{
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
}
*/
```
### url.querystring.parse

```javascript
const queryStringParse = require('@chickendinosaur/url/query-string/parse');
// or const queryStringParse = require('@chickendinosaur/url/').querystring.parse;

var url = '?item=1&name=joe%20r';
console.log(queryStringParse(queryStringParse, true));

// Output

/*
{
	name: 'joe r',
	item: '1'
}
*/
```

---  

# Development  

## Installation  

~/project/:

* npm install
* npm run test

## Build  

* npm run build

## Benchmarking  

* npm run benchmark

## Test  

* npm run test

---  

# License  

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

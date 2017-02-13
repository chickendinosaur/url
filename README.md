Url object and utilities.  

[Node's 'url' API reference](https://nodejs.org/docs/latest/api/url.html)

---  

# Specs  

## Performance  

### @chickendinosaur/url  
#### parse(url, false) x 1,869,033 ops/sec  
#### parse(url, true, false) x 704,786 ops/sec  
#### parse(url, true, true) x 643,198 ops/sec  

Test used:  
```javascript
var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
```

### @chickendinosaur/url/query/parse  
#### parse(queryString, false) x 1,387,553 ops/sec  
#### parse(queryString, true) x 1,164,266 ops/sec  

Test used:  
```javascript
var queryString = 'item=1&name=joe';
```

### @chickendinosaur/url/query/format  
#### format(parsedQuery, false) x 4,943,729 ops/sec  
#### format(parsedQuery, true) x 1,453,396 ops/sec  

Test used:  
```javascript
var parsedQuery = {
	item: '1',
	name: 'joe'
};
```

---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/url

## Usage

### @chickendinosaur/url/parse

```javascript
const parseURL = require('@chickendinosaur/url/parse');

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

### @chickendinosaur/url/format

```javascript
const formatURL = require('@chickendinosaur/url/format');
const URL = require('@chickendinosaur/url');

var urlObject = new URL();

urlObject.protocol = 'http:';
urlObject.auth = 'a:b';
urlObject.port = 80;
urlObject.hostname = 'github.com';
urlObject.hash = 'readme';
urlObject.query = 'one=1'; // or { one: 1 }
urlObject.pathname = '/chickendinosaur';

console.log(formatURL(urlObject));

// Output

/*
'http://a:b@github.com:80/chickendinosaur?one=1#readme'
*/
```

### @chickendinosaur/url/querystring/parse

```javascript
const queryStringParse = require('@chickendinosaur/url/query/parse');

var url = 'item=1&name=joe%20r';
console.log(queryStringParse(queryStringParse, true));

// Output

/*
{
	name: 'joe r',
	item: '1'
}
*/
```

### @chickendinosaur/url/querystring/format

```javascript
const format = require('@chickendinosaur/url/query/format');

var parsedQuery = {
	name: 'joe r',
	item: '1'
};
console.log(queryStringParse(parsedQuery, true));

// Output

/*
{
	name: 'joe r',
	item: '1'
}
*/
```

### @chickendinosaur/url/search/parse

Same as @chickendinosaur/url/query/parse but checks for and removes a '?' from the beginning of the input string.

### @chickendinosaur/url/search/format

Same as @chickendinosaur/url/query/format but adds a '?' to the beginning of the output string.

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

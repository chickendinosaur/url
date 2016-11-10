Url parsing utility meant to mimic node's parse() method from the 'url' package. Made to with the browser in mind so it takes a very minimalist approach to supply the least amount of overhead, garbage, and performance. Made this to be used with my routing solutions.  

[Node's 'url' API reference](https://nodejs.org/docs/latest/api/url.html)

## TODO  

* Replicate 3rd parameter @param slashesDenoteHost {Boolean}
* Create format() method.
* Create resolve() method.

---  

# Specs  

## Overhead  

Note: Due to dealing with fast-url-parser and 'url' having dependencies, browserify was use which adds overhead to the results. However, '@chickendinosaur/url-parser' has no dependencies so I've listed both result with and without being browserified. Also, the size will grow a little more once the other two method are added but nothing in comparison to the other offerings.

### @chickendinosaur/url-parser  
#### minified - 1685 bytes  
#### minified + gzipped - 772 bytes  
#### minified (without browserify) - 1222 bytes  
#### minified + gzipped (without browserify) - 548 bytes  

### url  
#### minified - 12685 bytes  
#### minified + gzipped - 4979 bytes  

### fast-url-parser  
#### minified - 15783 bytes  
#### minified + gzipped - 5767 bytes  

## Performance  

Path used: http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation

### @chickendinosaur/url-parser  
#### .parse(url, false) x 1,472,897 ops/sec  
#### .parse(url, true) x 705,511 ops/sec  

### url  
#### .parse(url, false) x 193,906 ops/sec  
#### .parse(url, true) x 146,577 ops/sec  

### fast-url-parser  
#### .parse(url, false) x 1,381,672 ops/sec  
#### .parse(url, true) x 593,819 ops/sec  

---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/url-parser

## Usage

```javascript
const UrlParser = require('@chickendinosaur/url-parser');

var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
var parsedURL = UrlParser.parse(url, true);

// parsedURL
{
	protocol: 'http:',
	ashes: true,
	th: 'joe:smith',
	st: 'mail.google.com:80',
	rt: '80',
	stname: 'mail.google.com',
	sh: '#pageLocation',
	arch: '?item=1&name=joe',
	ery: { item: '1', name: 'joe' },
	thname: '/a/b/c/',
	th: '/a/b/c/?item=1&name=joe',
	ef: 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation'
}
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

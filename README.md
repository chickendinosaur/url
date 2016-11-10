Url parsing method meant to mimic node's parse() method response object and parameters (no plan to add the slashesDenoteHost parameter) from the 'url' package. It takes a very minimalist approach to supply the least amount of overhead, garbage, and performance. Made this to be used in browser routing solutions. I was after file size while being after to use as many characters as possible in the path params or query params and keep it as fast as possible when parsing the query string.  

### Rules
* Assumes the hash is at the end of the url.

[Node's 'url' API reference](https://nodejs.org/docs/latest/api/url.html)

---  

# Specs  

## Overhead  

Note: Due to dealing with fast-url-parser and 'url' having dependencies, browserify was use which adds overhead to the results. However, '@chickendinosaur/parse-url' has no dependencies so I've listed both result with and without being browserified. Of course this package does not include a format() or resolve() method but those are very minimal to implement as well and will be done in seperate packages if I need them.

### @chickendinosaur/parse-url  
#### minified - 1661 bytes  
#### minified + gzipped - 784 bytes  
#### minified (without browserify) - 1198 bytes  
#### minified + gzipped (without browserify) - 561 bytes  

### url  
#### minified - 12685 bytes  
#### minified + gzipped - 4979 bytes  

### fast-url-parser  
#### minified - 15783 bytes  
#### minified + gzipped - 5767 bytes  

## Performance  

URL used: 
```javascript
var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
```

### @chickendinosaur/parse-url  
#### parse(url, false) x 1,125,002 ops/sec  
#### parse(url, true) x  611,324 ops/sec  

### url  
#### parse(url, false) x 186,073 ops/sec  
#### parse(url, true) x 142,023 ops/sec  

### fast-url-parser  
#### parse(url, false) x 1,379,748 ops/sec  
#### parse(url, true) x 583,873 ops/sec  

---  

# Getting Started  

## Installation

#### npm  

npm install @chickendinosaur/parse-url

## Usage

```javascript
const parseURL = require('@chickendinosaur/parse-url');

var url = 'http://joe:smith@mail.google.com:80/a/b/c/?item=1&name=joe#pageLocation';
console.log(parseURL(url, true));

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

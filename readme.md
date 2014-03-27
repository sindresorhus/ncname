# ncname [![Build Status](https://travis-ci.org/sindresorhus/ncname.svg?branch=master)](https://travis-ci.org/sindresorhus/ncname)

> Regular expression for matching [XML NCName](http://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-NCName)


## Install

```bash
$ npm install --save ncname
```


## Usage

```js
var ncname = require('ncname');

ncname.test('hællæ');
//=> true

ncname.test('$unicorn');
//=> false
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)

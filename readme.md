# ncname

> Regular expression for matching [XML NCName](http://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-NCName)


## Install

```
$ npm install ncname
```


## Usage

```js
const ncname = require('ncname');

ncname.test('hællæ');
//=> true

ncname.test('$unicorn');
//=> false
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

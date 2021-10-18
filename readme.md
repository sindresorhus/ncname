# ncname

> Regular expression for matching [XML NCName](https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-NCName)

## Install

```sh
npm install ncname
```

## Usage

```js
import ncname from 'ncname';

ncname.test('hællæ');
//=> true

ncname.test('$unicorn');
//=> false
```

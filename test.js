'use strict';
var assert = require('assert');
var ncname = require('./index');

it('should match valid NCName', function () {
	assert(ncname.test('foo'));
	assert(ncname.test('fooå'));
	assert(ncname.test('fooᅳ'));
	assert(!ncname.test('#foo'));
});

import test from 'ava';
import ncname from './index.js';

const matches = [
	'foo',
	'fooå',
	'fooᅳ',
];

const nonMatches = [
	'#foo',
];

test('matches', t => {
	for (const match of matches) {
		t.true(ncname.test(match));
	}
});

test('non matches', t => {
	for (const nonMatch of nonMatches) {
		t.false(ncname.test(nonMatch));
	}
});

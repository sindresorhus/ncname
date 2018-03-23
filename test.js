import test from 'ava';
import m from '.';

const matches = [
	'foo',
	'fooå',
	'fooᅳ'
];

const nonMatches = [
	'#foo'
];

test('matches', t => {
	for (const match of matches) {
		t.true(m.test(match));
	}
});

test('non matches', t => {
	for (const nonMatch of nonMatches) {
		t.false(m.test(nonMatch));
	}
});

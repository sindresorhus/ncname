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
	for (const x of matches) {
		t.true(m.test(x));
	}
});

test('non matches', t => {
	for (const x of nonMatches) {
		t.false(m.test(x));
	}
});

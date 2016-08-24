import test from 'ava';
import compose from '../../server/util/compose';

const addFive = v => v + 5;
const timesTwo = v => v * 2;

test('composes two unary functions together from right to left', t => {
  t.plan(2);
  t.is(compose(addFive, timesTwo)(10), 25);
  t.is(compose(timesTwo, addFive)(10), 30);
});

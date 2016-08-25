import test from 'ava';
import curry from '../../server/util/curry';

const add = (a, b, c) => a + b + c;

test('enable partial application on a function', t => {
  const curriedAdd = curry(add);
  t.plan(3);
  t.is(curriedAdd(1)(2)(3), add(1, 2, 3));
  t.is(curriedAdd(1, 2)(3), add(1, 2, 3));
  t.is(curriedAdd(1)(2, 3), add(1, 2, 3));
});

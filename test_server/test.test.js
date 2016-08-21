import test from 'ava';

test('basic test', t => {
  t.is(1, 1);
});

test('deep equal', t => {
  t.deepEqual([1, 2], [1, 2]);
});

test('async test', async t => {
  const val = Promise.resolve('result');
  t.is(await val, 'result');
});

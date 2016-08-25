import test from 'ava';
import flatten from '../../server/util/flatten';

const singleNesting = [1, [2, 3], 4, [5], 6, [7, 8, 9], [10, 11]];

test('non-recursively flattens array of arrays', t => {
  t.deepEqual(flatten(singleNesting), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
});

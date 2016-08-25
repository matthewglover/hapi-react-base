import test from 'ava';
import flatMap from '../../server/util/flat_map';

const simpleArray = [1, 2, 3];
const duplicate = v => [v, v];

test('maps over an array then flattens resulting array', t => {
  t.deepEqual(flatMap(duplicate, simpleArray), [1, 1, 2, 2, 3, 3]);
});

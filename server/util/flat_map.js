const flatten = require('./flatten');
const curry = require('./curry');

// flatMap :: (a -> [b]) -> [a] -> [b]
const flatMap = curry((fn, arr) =>
  flatten(arr.map(fn)));

module.exports = flatMap;

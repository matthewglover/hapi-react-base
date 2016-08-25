// flatten :: [[a] | a] -> [a]
const flatten = (arr) =>
  arr.reduce((acc, crnt) => acc.concat(crnt), []);

module.exports = flatten;

// curry :: ((a, b) -> c) -> a -> b -> c
const curry = fn => {
  const innerFn = (...args) =>
    (args.length >= fn.length ?
			fn(...args) :
			(...moreArgs) => innerFn(...[...args, ...moreArgs]));

  return innerFn;
};

module.exports = curry;

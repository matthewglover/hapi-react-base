// simpleCompose :: (b -> c, a -> b) -> (a -> c)
const simpleCompose = (f, g) => arg => f(g(arg));

const compose = (...fns) =>
  fns.reduce(simpleCompose);

module.exports = compose;

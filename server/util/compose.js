// compose :: (b -> c, a -> b) -> (a -> c)
const compose = (f, g) => (arg) => f(g(arg));

module.exports = compose;

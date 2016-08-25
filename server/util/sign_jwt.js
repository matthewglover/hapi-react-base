const jwt = require('jsonwebtoken');
const curry = require('./curry');
const promisify = require('./promisify');

// sign :: (String, Object, Object) -> Promise String
const sign = promisify(jwt.sign, jwt);

// signJWT :: Object -> String -> Object -> Object -> Promise String
const signJWT = curry((options, secret, payload) =>
  sign(payload, secret, options));

module.exports = signJWT;

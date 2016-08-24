const getUserToken = require('./get_user_token');
const getUserDetails = require('./get_user_details');
const camelizeProps = require('../../../util/camelize_props');

const fbAuthenticate = (config) =>
  ({
    path: config.authPath,
    method: 'GET',
    handler(req, reply) {
      getUserToken(Object.assign({ code: req.query.code }, config))
        .then(getUserDetails)
        .then(camelizeProps)
        .then(reply);
    },
  });

module.exports = fbAuthenticate;

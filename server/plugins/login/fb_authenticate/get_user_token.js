const request = require('../../../util/request');
const compose = require('../../../util/compose');
const querystring = require('querystring');

// type UserToken = {access_token: String, token_type: String, expires_in: Number}

// userTokenQuery :: Object -> String
const userTokenQuery = ({ code, clientId, clientSecret, baseUrl, authPath }) =>
  querystring.stringify({
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: `${baseUrl}${authPath}`,
  });

// userTokenUrl :: String -> String
const userTokenUrl = qs =>
  `https://graph.facebook.com/v2.3/oauth/access_token?${qs}`;

// requestOptions :: Object -> Object
const requestOptions = config =>
  ({
    url: compose(userTokenUrl, userTokenQuery)(config),
    headers: {
      Accept: 'application/json',
    },
  });

// getUserToken :: Object -> Promise UserToken
const getUserToken = (config) =>
  request(requestOptions(config)).then(JSON.parse);

module.exports = getUserToken;

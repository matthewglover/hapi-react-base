const querystring = require('querystring');

// type LoginConfig = {baseUrl: String, clientId: String, loginPath: String, authPath: String}

// authQuery :: (String, String) -> String
const authQuery = ({ baseUrl, clientId, authPath }) =>
  querystring.stringify({
    client_id: clientId,
    redirect_uri: `${baseUrl}${authPath}`,
  });

// facebookAuthUrl -> String -> String
const facebookAuthUrl = qs =>
  `https://www.facebook.com/dialog/oauth?${qs}`;

// redirectUri :: (String, String) -> String
const redirectUri =
  (config) => facebookAuthUrl(authQuery(config));

// fbLogin :: LoginConfig -> Hapi.Route
const fbLogin = config =>
  ({
    method: 'GET',
    path: config.loginPath,
    handler(req, reply) {
      reply.redirect(redirectUri(config));
    },
  });

module.exports = fbLogin;

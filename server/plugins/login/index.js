const fbLogin = require('./fb_login');
const fbAuthenticate = require('./fb_authenticate');

const config = {
  loginPath: '/fb-login',
  authPath: '/fb-auth',
  baseUrl: process.env.BASE_URL,
  clientId: process.env.FB_CLIENT_ID,
  clientSecret: process.env.FB_CLIENT_SECRET,
};

const register = (server, options, next) => {
  server.route([fbLogin(config), fbAuthenticate(config)]);
  next();
};

register.attributes = { name: 'login' };

module.exports = { register };

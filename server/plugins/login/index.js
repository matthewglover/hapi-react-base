const fbLogin = require('./fb_login_route');
const fbAuthenticate = require('./fb_authenticate_route');

const register = (server, options, next) => {
  server.route([fbLogin, fbAuthenticate]);
  next();
};

register.attributes = { name: 'login' };

module.exports = { register };

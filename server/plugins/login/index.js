const compose = require('../../util/compose');
const flatMap = require('../../util/flat_map');
const fbLogin = require('./fb_login');
const fbAuthenticate = require('./fb_authenticate');

const configRoutes = config => {
  switch (config.provider) {
    case 'facebook':
      return [fbLogin(config), fbAuthenticate(config)];
    default :
      return [];
  }
};

const register = (server, { configs }, next) => {
  compose(server.route.bind(server), flatMap(configRoutes))(configs);
  next();
};

register.attributes = { name: 'login' };

module.exports = { register };

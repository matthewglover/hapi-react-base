const login = require('./login');
const signJWT = require('../util/sign_jwt');

const configs = [
  {
    provider: 'facebook',
    loginPath: '/fb-login',
    authPath: '/fb-auth',
    baseUrl: process.env.BASE_URL,
    clientId: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    generateToken: signJWT({ algorithm: 'HS256' }, process.env.JWT_SECRET),
  },
];

module.exports = [
  {
    register: login,
    options: { configs },
  },
];

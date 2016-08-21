const fbLogin = {
  path: '/fb-login',
  method: 'GET',
  handler(request, reply) {
    reply('fb login route');
  },
};

module.exports = fbLogin;

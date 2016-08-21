const fbAuthenticate = {
  path: '/fb-authenticate',
  method: 'GET',
  handler(request, reply) {
    reply('fb authenticate route');
  },
};

module.exports = fbAuthenticate;

const conf = require('../../server/config');

const configureInjectPromise = server => {
  // eslint-disable-next-line no-param-reassign
  server.injectPromise = (options) =>
    new Promise(resolve => server.inject(options, resolve));

  return server;
};

const testServer = ({ plugins, routes }) =>
  conf.createServer()
    .then(conf.setConnection())
    .then(conf.registerPlugins(plugins || []))
    .then(conf.addRoutes(routes || []))
    .then(configureInjectPromise);


module.exports = testServer;

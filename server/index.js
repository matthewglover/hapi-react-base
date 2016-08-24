require('env2')('config.env');
const conf = require('./config');
const plugins = require('./plugins');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const connectionOptions = process.env.NODE_ENV === 'TEST' ? undefined : { port };

conf.createServer()
  .then(conf.setConnection(connectionOptions))
  .then(conf.registerPlugins(plugins))
  .then(conf.addRoutes(routes))
  .then(conf.startServer)
  .then(conf.logStatus)
  .catch(conf.logError);

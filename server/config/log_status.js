// logStatus :: Hapi.Server -> void
const logStatus = server =>
  // eslint-disable-next-line no-console
  console.log(`Server running at ${server.info.uri}`);

module.exports = logStatus;

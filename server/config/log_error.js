// logError :: Error -> void
const logError = (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
  throw err;
};

module.exports = logError;

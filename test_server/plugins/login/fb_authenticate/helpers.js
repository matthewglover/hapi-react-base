const USER_TOKEN = {
  access_token: 'facebook-access-token',
  token_type: 'bearer',
  expires_in: 'timeinsecondstoexpiry',
};

// TODO: Replace with more accurate USER_DETAILS data
const USER_DETAILS = { name: 'Matthew Glover' };

const AWFUL_ERROR = {
  message: 'something awful happened',
  code: 'AWFUL_ERROR',
};

module.exports = {
  USER_TOKEN,
  USER_DETAILS,
  AWFUL_ERROR,
};

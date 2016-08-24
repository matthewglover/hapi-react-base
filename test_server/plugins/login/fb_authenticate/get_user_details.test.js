import test from 'ava';
import nock from 'nock';
import { USER_DETAILS, USER_TOKEN, AWFUL_ERROR } from './helpers';
import getUserDetails from '../../../../server/plugins/login/fb_authenticate/get_user_details';

nock('https://graph.facebook.com')
  .get(`/me?access_token=${USER_TOKEN.access_token}`)
  .reply(200, USER_DETAILS);

nock('https://graph.facebook.com')
  .get(`/me?access_token=${USER_TOKEN.access_token}`)
  .replyWithError(AWFUL_ERROR);

test.serial('returns a Promise which resolves to a user token object', async t => {
  const expected = Object.assign({ provider: 'facebook' }, USER_DETAILS, USER_TOKEN);
  const actual = await getUserDetails(USER_TOKEN);
  t.deepEqual(actual, expected);
});

test.serial('returns a Promise which resolves to a user token object', async t => {
  t.plan(2);
  const err = await t.throws(getUserDetails(USER_TOKEN));
  t.is(err, AWFUL_ERROR);
});

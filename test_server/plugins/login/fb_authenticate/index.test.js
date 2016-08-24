import test from 'ava';
import nock from 'nock';
import querystring from 'querystring';
import { USER_TOKEN, USER_DETAILS } from './helpers';
import camelizeProps from '../../../../server/util/camelize_props';
import testServer from '../../../test_helpers/test_server';
import fbAuthenticate from '../../../../server/plugins/login/fb_authenticate';

const config = {
  code: 'facebook-code',
  loginPath: '/fb-login',
  authPath: '/fb-auth',
  baseUrl: 'localhost',
  clientId: 'facebook-client-id',
  clientSecret: 'facebook-secret',
};

const qs = querystring.stringify({
  code: config.code,
  client_id: config.clientId,
  client_secret: config.clientSecret,
  redirect_uri: `${config.baseUrl}${config.authPath}`,
});

nock('https://graph.facebook.com')
  .get(`/v2.3/oauth/access_token?${qs}`)
  .reply(200, USER_TOKEN);

nock('https://graph.facebook.com')
  .get(`/me?access_token=${USER_TOKEN.access_token}`)
  .reply(200, USER_DETAILS);

test.serial('fbLogin route works', async t => {
  const server = await testServer({ routes: [fbAuthenticate(config)] });
  const response = await server.injectPromise({ method: 'GET', url: '/fb-auth?code=facebook-code' });
  const expected = camelizeProps(Object.assign({ provider: 'facebook' }, USER_DETAILS, USER_TOKEN));

  t.deepEqual(response.result, expected);
});

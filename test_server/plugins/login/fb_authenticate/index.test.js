import test from 'ava';
import nock from 'nock';
import url from 'url';
import querystring from 'querystring';
import { USER_TOKEN, USER_DETAILS } from './helpers';
import signJWT from '../../../../server/util/sign_jwt';
import testServer from '../../../test_helpers/test_server';
import fbAuthenticate from '../../../../server/plugins/login/fb_authenticate';

const config = {
  code: 'facebook-code',
  loginPath: '/fb-login',
  authPath: '/fb-auth',
  baseUrl: 'localhost',
  clientId: 'facebook-client-id',
  clientSecret: 'facebook-secret',
  generateToken: signJWT({ algorithm: 'HS256', noTimestamp: true }, 'my-secret'),
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

test('fbLogin route works', async t => {
  const server = await testServer({ routes: [fbAuthenticate(config)] });
  const response = await server.injectPromise({ method: 'GET', url: '/fb-auth?code=facebook-code' });
  const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiJ0aW1laW5zZWNvbmRzdG9leHBpcnkiLCJ0b2tlblR5cGUiOiJiZWFyZXIiLCJhY2Nlc3NUb2tlbiI6ImZhY2Vib29rLWFjY2Vzcy10b2tlbiIsImlkIjoiZmFjZWJvb2tpZCIsIm5hbWUiOiJNYXR0aGV3IEdsb3ZlciIsInByb3ZpZGVyIjoiZmFjZWJvb2sifQ.dT1TIo26mxltWO38KyE4BIAh7Sx5Xfl1I-T2pPZa5M0';

  const { query } = url.parse(response.headers.location);
  const { jwt } = querystring.parse(query);

  t.plan(2);
  t.is(response.statusCode, 302);
  t.is(jwt, expected);
});

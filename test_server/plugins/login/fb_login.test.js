import test from 'ava';
import url from 'url';
import querystring from 'querystring';
import testServer from '../../test_helpers/test_server';
import fbLogin from '../../../server/plugins/login/fb_login';

const config = {
  loginPath: '/fb-login',
  authPath: '/fb-auth',
  baseUrl: 'localhost',
  clientId: 'facebook-client-id',
  clientSecret: 'facebook-secret',
};

test('fbLogin route works', async t => {
  const server = await testServer({ routes: [fbLogin(config)] });
  const response = await server.injectPromise({ method: 'GET', url: '/fb-login' });
  const { hostname, pathname, query } = url.parse(response.headers.location);
  const { client_id, redirect_uri } = querystring.parse(query);

  t.plan(5);
  t.is(response.statusCode, 302, 'expect redirect status code');
  t.is(hostname, 'www.facebook.com');
  t.is(pathname, '/dialog/oauth');
  t.is(client_id, config.clientId);
  t.is(redirect_uri, `${config.baseUrl}${config.authPath}`);
});

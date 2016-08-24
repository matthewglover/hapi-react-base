import nock from 'nock';
import test, { before } from 'ava';
import request from '../../server/util/request';

const AWFUL_ERROR = { message: 'something awful happened', code: 'AWFUL_ERROR' };

before('mock test urls', () => {
  nock('http://test.url.com')
    .get('/success')
    .reply(200, 'request body');

  nock('http://test.url.com')
    .get('/fail')
    .replyWithError(AWFUL_ERROR);
});

test('request returns a Promise resolving to request body', async t => {
  t.is(await request('http://test.url.com/success'), 'request body');
});

test('request returns a Promise rejecting with request error', async t => {
  t.plan(2);
  const err = await t.throws(request('http://test.url.com/fail'));
  t.is(err, AWFUL_ERROR);
});

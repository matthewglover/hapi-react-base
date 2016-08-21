import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../app/components/app';

test('shallow', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.contains(<h1>Hello World!</h1>), true);
});

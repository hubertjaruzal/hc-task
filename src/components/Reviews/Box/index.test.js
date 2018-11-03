import React from 'react';
import { shallow } from 'enzyme';

import Box from './index';

const wrapper = shallow(<Box/>);

const instance = wrapper.instance();

it('Test expandDesc method', () => {
  expect(instance.state.showFullDesc).toBeFalsy();

  instance.expandDesc();

  expect(instance.state.showFullDesc).toBeTruthy();
});

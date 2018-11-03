import React from 'react';
import { shallow } from 'enzyme';

import Comment from './index';

const wrapper = shallow(
  <Comment 
    comment={{
      text: "lorem ipsum",
      user: {
        name: "J Cole",
        role: "rapper",
        avatar: ""
      }
    }}
  />
);

const instance = wrapper.instance();

it('Test expandText method', () => {
  expect(instance.state.showFullText).toBeFalsy();

  instance.expandText();

  expect(instance.state.showFullText).toBeTruthy();
});
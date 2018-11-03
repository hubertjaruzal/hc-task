import React from 'react';
import { shallow } from 'enzyme';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Reviews from './index';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
    reviews: {
        list: []
    },
});

const wrapper = shallow(<Reviews store={store} />).dive();

const instance = wrapper.instance();

it('Test setIsLoading method', () => {
  expect(instance.state.isLoading).toBeTruthy();

  instance.setIsLoading(false);
  expect(instance.state.isLoading).toBeFalsy();

  instance.setIsLoading('');
  expect(instance.state.isLoading).toBeFalsy();

  instance.setIsLoading(undefined);
  expect(instance.state.isLoading).toBeFalsy();

  instance.setIsLoading('ss');
  expect(instance.state.isLoading).toBeTruthy();
});

it('Test componentDidMount method', () => {
  wrapper.setProps({
    getReviews: jest.fn()
  });

  instance.componentDidMount();

  expect(instance.props.getReviews).toHaveBeenCalledTimes(1);
});
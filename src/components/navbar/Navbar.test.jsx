import React from 'react';
import { findByAtrr } from '../../utils';
import { shallow } from 'enzyme';
import { Navbar } from './index';

const setup = () => {
  return shallow(<Navbar />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByAtrr(wrapper, "navbar-component");
  expect(component.length).toBe(1);
});
import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('test component Button', () => {
  
  test('render without error', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find("[data-test='component-button']");
    expect(button.length).toBe(1);
  });

});
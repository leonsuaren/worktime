import React from 'react';
import { shallow } from 'enzyme';
import { findByAtrr } from '../../utils';
import { Header } from './Header';
import CheckPropTypes from 'check-prop-types';

const setup = (props) => {
  return shallow(<Header  {...props}/>);
};

test('render without error', () => {
  const wrapper = setup({ brand: "CCOD" });
  const component = findByAtrr(wrapper, "header-component");
  expect(component.length).toBe(1);
});

test('the header component contains a title', () => {
  const wrapper = setup({ brand: "CCDO"});
  const component = findByAtrr(wrapper, "title-component").text();
  expect(component).not.toBe('');
});

test('the header component contains a defaul title', () => {
  const wrapper = setup({ brand: '' });
  const component =  findByAtrr(wrapper, "title-component").text();
  expect(component).toBe('Distribution Center');
});

test('does not throw an error with expected props', () => {
  const checkProps = CheckPropTypes(Header.propTypes, { brand: 'CCOD' }, 'props', Header.name);
  expect(checkProps).toBeUndefined(); 
});

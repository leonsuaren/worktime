import React from 'react';
import { 
  ButtonStyled,
  ButtonDescription
 } from './index';

export const Button = ({ icon, description, ...props }) => {
  return(
    <ButtonStyled data-test="component-button" {...props}>{ icon }<ButtonDescription>{ description }</ButtonDescription></ButtonStyled>
  );
};
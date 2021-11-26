import React from 'react';
import { 
  ButtonStyled,
  ButtonDescription
 } from './index';

export const Button = ({ icon, description }) => {
  return(
    <ButtonStyled data-test="component-button">{ icon }<ButtonDescription>{ description }</ButtonDescription></ButtonStyled>
  );
};
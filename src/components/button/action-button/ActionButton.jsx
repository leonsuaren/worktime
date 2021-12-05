import React from 'react';
import { ActionButtonStyled, ButtonTextStyled } from './styled'; 

export const ActionButton = ({ text, ...props }) => {
  return(
    <ActionButtonStyled {...props}><ButtonTextStyled>{ text }</ButtonTextStyled></ActionButtonStyled>
  )
};

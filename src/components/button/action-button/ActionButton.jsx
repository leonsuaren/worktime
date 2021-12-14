import React from 'react';
import { ActionButtonStyled, ButtonTextStyled } from './styled'; 

export const ActionButton = ({ cancel, text, ...props }) => {
  return(
    <ActionButtonStyled {...props} cancel={cancel}><ButtonTextStyled>{ text }</ButtonTextStyled></ActionButtonStyled>
  )
};

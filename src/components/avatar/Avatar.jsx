import React, { Fragment } from 'react';
import { AvatarPlaceHolder } from './styled';

export const Avatar = ({ children }) => {
  return(
    <Fragment>
      <AvatarPlaceHolder>{ children }</AvatarPlaceHolder>
    </Fragment>
  )
};
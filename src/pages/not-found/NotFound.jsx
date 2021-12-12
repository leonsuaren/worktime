import React, { Fragment } from 'react';
import { NotFoundWrapper, NotFoundContect, StatusCode, StatusMessage } from './styled';
import { StyledNotFoundWarning } from '../../global';

export const NotFound = () => {
  return (
    <Fragment>
      <NotFoundWrapper>
        <NotFoundContect>
          <StyledNotFoundWarning />
          <StatusCode>404</StatusCode>
          <StatusMessage>Sorry! Page Not Found.</StatusMessage>
         </NotFoundContect>
      </NotFoundWrapper>
    </Fragment>
  )
};
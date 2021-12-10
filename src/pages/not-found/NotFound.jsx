import React, { Fragment } from 'react';
import { NotFontdWrapper, NotFoundContect, StatusCode, StatusMessage } from './styled';
import { StyledNotFoundWarning } from '../../global';

export const NotFound = () => {
  return (
    <Fragment>
      <NotFontdWrapper>
        <NotFoundContect>
          <StyledNotFoundWarning />
          <StatusCode>404</StatusCode>
          <StatusMessage>Sorry! Page Not Found.</StatusMessage>
         </NotFoundContect>
      </NotFontdWrapper>
    </Fragment>
  )
};
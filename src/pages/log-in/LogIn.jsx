import React, { Fragment } from 'react';
import { StyledLogInWrapper, LoginModal, Title, LinkTo, InputWrapper, Input, Span } from './styled';
import { ActionButton } from '../../components/button/action-button';

export const LogIn = () => {

  return (
    <Fragment>
      <StyledLogInWrapper>
        <LoginModal>
          <Title>LOGIN</Title>
          <InputWrapper>
            <div>
              <label /><Span>User ID:</Span><Input type="text" />
            </div>
            <div>
              <label /><Span>Password:</Span><Input type="password" />
            </div>
          </InputWrapper>
          <LinkTo to='/'>
            <ActionButton text="LOGIN" />
          </LinkTo>
        </LoginModal>
      </StyledLogInWrapper>
    </Fragment>
  )
}; 
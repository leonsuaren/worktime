import React, { Fragment } from 'react';

import { AlertWrapper, AlertBody, AlertIcon, AlertContent } from './styled';
import { StyledAiOutlineExclamationCircle, StyledAiOutlineCloseCircle, StyledAiOutlineBulb, StyledAiOutlineCheckCircle } from '../../global';

export const Alert = ({ icon, description, showAlert, type }) => {

  if (type === "Success") {
    icon = <StyledAiOutlineCheckCircle />
  } else if (type === "Warning") {
    icon = <StyledAiOutlineExclamationCircle/>;
  } else if (type === "Info") {
    icon = <StyledAiOutlineBulb />
  } else if (type === "Danger") {
    icon = <StyledAiOutlineCloseCircle />;
  }

  return(
    <Fragment>
      <AlertWrapper showAlert={showAlert} type={type}>
        <AlertBody>
          <AlertIcon>{ icon }</AlertIcon>
          <AlertContent>{ description }</AlertContent>
        </AlertBody>
      </AlertWrapper>
    </Fragment>
  );
};
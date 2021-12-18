import React, { Fragment, useContext, useEffect } from 'react';

import { AlertContext } from '../../context';

import { AlertWrapper, AlertBody, AlertIcon, AlertContent } from './styled';
import { StyledAiOutlineExclamationCircle, StyledAiOutlineCloseCircle, StyledAiOutlineBulb, StyledAiOutlineCheckCircle } from '../../global';

export const Alert = ({ icon, description, type }) => {
  const alertContext = useContext(AlertContext);

  if (type === "Success") {
    icon = <StyledAiOutlineCheckCircle />
  } else if (type === "Warning") {
    icon = <StyledAiOutlineExclamationCircle/>;
  } else if (type === "Info") {
    icon = <StyledAiOutlineBulb />
  } else if (type === "Danger") {
    icon = <StyledAiOutlineCloseCircle />;
  }

  useEffect(() => {
    alertContext.onHideAlert();
  });

  return(
    <Fragment>
      <AlertWrapper showAlert={alertContext.showAlert} type={type}>
        <AlertBody>
          <AlertIcon>{ icon }</AlertIcon>
          <AlertContent>{ description }</AlertContent>
        </AlertBody>
      </AlertWrapper>
    </Fragment>
  );
};
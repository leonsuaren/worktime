import styled, { css } from 'styled-components';
import { globalStyles } from '../../global';

const alertType = ({ type }) => {
  if (type === "Success") {
    return(
      css`
       background-color: ${globalStyles.alertSuccess};
      `
    )
  } else if (type === "Warning") {
    return(
      css`
       background-color: ${globalStyles.alertWarning};
      `
    )
  } else if (type === "Info") {
    return(
      css`
       background-color: ${globalStyles.alertInfo};
      `
    )
  } else if (type === "Danger") {
    return(
      css`
       background-color: ${globalStyles.alertDanger};
      `
    )
  }
};

export const AlertWrapper = styled.div`
  z-index: 20;
  display: block;
  justify-items: center;
  align-content: center;
  min-height: 80px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  background: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${p => p.showAlert ? 0 : -80}px;
  width: 90%;
  background: ${ globalStyles.alertWarning };
  padding: 15px 10px;
  box-sizing: border-box;
  ${alertType}
`;

export const AlertBody = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-template-columns: 20% 80%;
`;

export const AlertIcon = styled.div`
  align-self: center;
`;

export const AlertContent = styled.p`
  font-weight: bold;
  justify-self: normal;
`;
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackground};
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    color: #666666;
    height: 100vh;
  }
`;

export const Hr = styled.hr`
  width: 10%;
  margin: 20px auto;
`;

export const globalStyles = {
  disabled: '#DDDDDD',
  darkSkeleton: '#AFAEAE',
  ligthSkeleton: '#CCC9C9',
  alertSuccess: '#9FF4CC',
  alertWarning: '#F7D367',
  alertDanger: '#FC5F67',
  alertInfo: '#57D8F2'
}
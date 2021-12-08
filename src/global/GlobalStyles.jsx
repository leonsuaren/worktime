import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackground};
    font-family: 'Montserrat';
    margin: 0;
    color: #666666;
  }
`;

export const Hr = styled.hr`
  width: 10%;
  margin: 20px auto;
`;

export const globalStyles = {
  disabled: '#DDDDDD',
  darkSkeleton: '#AFAEAE',
  ligthSkeleton: '#ccc9c9'
}
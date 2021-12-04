import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${p => p.theme.bodyBackground};
    font-family: 'Montserrat';
    margin: 0;
    color: #666666;
  }
`;

export const globalStyles = {
  pallete: {
    background: '#fb6152',
    navbar: '#ffffff',
    alternativeBackground: '#CECECE',
    primaryFont: '#666666',
    secondaryFont: '#CECECE',
    primaryButton: '#666666',
    secondaryButton: '#CECECE',
    disabledButton: '#EEEEEE',
    disabledFont: '#666666'
  }
};

export const Hr = styled.hr`
  width: 10%;
  margin: 20px auto;

`;

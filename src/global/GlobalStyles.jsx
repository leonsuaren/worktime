import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #EDDEDE;
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

// PRIMARY THEME
// BODY: background: #FFFFFF
// HEADER: background: '#256B9D'
// NAVBAR: background: '#DCEAF9'
// FONT COLOR: #666666

// ALTERNATIVE THEME
// BODY: background: #EDDEDE
// HEADER: background: '#FD6152'
// NAVBAR: background: '#FFFFFF'
// FONT COLOR: #666666
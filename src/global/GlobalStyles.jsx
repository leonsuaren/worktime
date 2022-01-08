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

// export const NotifyNumber = styled.div`
//   width: 20px;
//   height: 15px;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   background-color: ${p => p.theme.iconColor};
// `

export const globalStyles = {
  disabled: '#DDDDDD',
  darkSkeleton: '#AFAEAE',
  ligthSkeleton: '#CCC9C9',
  alert: {
    alertSuccess: '#c5f7de',
    successFontColor: '#13f282',
    alertWarning: '#f7e3b2',
    warningFontColor: '#f4b516',
    alertDanger: '#f7aaae',
    dangerFontColor: '#f70e1a',
    alertInfo: '#a4e8f4',
    infoFontColor: '#0cd4f7'
  }
}
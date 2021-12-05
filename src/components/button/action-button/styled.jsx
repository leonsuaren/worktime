import styled from 'styled-components';

export const ActionButtonStyled = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  border: none;
  background-color: ${p => p.theme.iconColor};
`;

export const ButtonTextStyled = styled.span`
  color: #FFFFFF;
  text-transform: uppercase;
  display: block;
  font-size: .7rem;
  font-weight: bold;
  font-family: 'Montserrat';
  color: ${p => p.theme.fontColor};
`;
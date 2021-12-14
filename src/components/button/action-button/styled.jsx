import styled, { css } from 'styled-components';

const Disabled = ({ disabled }) => {
  if (disabled) {
    return(
      css`
        background-color: #CCCCCC;
        cursor: not-allowed;
      `
    )
  }
}

export const ActionButtonStyled = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 5px;
  border: none;
  background-color: ${p => p.cancel ? '#F23759' : p.theme.iconColor};
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  min-width: 80px;
  cursor: pointer;
  ${Disabled}
`;

export const ButtonTextStyled = styled.span`
  color: #FFFFFF;
  text-transform: uppercase;
  display: block;
  font-size: .7rem;
  font-family: 'fangsong';
  color: '#FFFFFF';
`;
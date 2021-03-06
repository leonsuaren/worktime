import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  &:disabled {
    color: #cecece;
  }
  cursor: pointer;
`;

export const ButtonDescription = styled.span`
  display: block;
  margin-top: 7px;
  font-size: .7rem;
  font-weight: bold;
  font-family: 'Montserrat';
  color: ${p => p.theme.fontColor};
`;
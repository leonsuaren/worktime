import styled from 'styled-components';
import { globaStyles, globalStyles } from '../../global';

export const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;

  &:disabled {
    color: #cecece;
  }
`;

export const ButtonDescription = styled.span`
  display: block;
  margin-top: 7px;
  font-size: .7rem;
  font-weight: bold;
  font-family: ${globalStyles.typography.primaryFont};
`;
import styled, { css } from 'styled-components';
import { AiFillSetting } from 'react-icons/ai';

const commonIconStyled = () => {
  return(
    css`
      font-size: 20px;
      color: ${p => p.theme.fontColor};
    `
  )
};


const active = ({isActive}) => {
  if(isActive) {
    return(
      css`
      border-bottom: 1px solid ${p => p.theme.fontColor};
      `
    )
  } else {
    return(
      css`
        border-bottom: none;
      `
    )
  }
}

export const StyledFillSetting = styled(AiFillSetting)`
  ${commonIconStyled}
`;


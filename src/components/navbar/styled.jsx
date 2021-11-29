import styled, { css } from 'styled-components';
import { AiOutlineHome, AiOutlineSchedule, AiOutlineDesktop, AiOutlineNotification, AiOutlineMore } from 'react-icons/ai';

export const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: 70px;
  background-color: ${p => p.theme.navBarBackground};
  border-bottom: ${p => p.theme.borderColor};
`;

const commonIconStyled = () => {
  return(
    css`
      font-size: 20px;
      color: ${p => p.theme.fontColor};
    `
  )
};

export const StyledBihome = styled(AiOutlineHome)`
  ${commonIconStyled}
`;

export const StyledAiOutlineSchedule = styled(AiOutlineSchedule)`
  ${commonIconStyled}
`;

export const StyledAiOutlineDesktop = styled(AiOutlineDesktop)`
  ${commonIconStyled}
`;

export const StyledAiOutlineNotification = styled(AiOutlineNotification)`
  ${commonIconStyled}
`;

export const StyledAiOutlineMore = styled(AiOutlineMore)`
  ${commonIconStyled}
`;
import styled, { css } from 'styled-components';
import { 
  AiFillSetting, 
  AiOutlineHome, 
  AiOutlineSchedule, 
  AiOutlineDesktop, 
  AiOutlineNotification, 
  AiOutlineMore 
} from 'react-icons/ai';

const commonIconStyled = () => {
  return(
    css`
      font-size: 20px;
      color: ${p => p.theme.fontColor};
    `
  )
};

export const StyledFillSetting = styled(AiFillSetting)`
  ${commonIconStyled}
`;

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


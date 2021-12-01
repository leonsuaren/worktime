import styled, { css } from 'styled-components';
import {
  AiFillSetting,
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineDesktop,
  AiOutlineNotification,
  AiOutlineMore,
  AiFillExperiment,
  AiFillCaretRight,
  AiFillDatabase,
  AiOutlineReconciliation,
  AiOutlineWarning,
  AiOutlineUsergroupAdd,
  AiOutlineDiff,
  AiOutlineVideoCamera
} from 'react-icons/ai';


const IconStyled = () => {
  return (
    css`
      font-size: 20px;
      color: ${p => p.theme.fontColor};
    `
  )
};

const ThemeIconStyled = () => {
  return (
    css`
    font-size: 20px;
    color: ${p => p.theme.iconColor};
    align-self: center;
    `
  )
}

export const StyledFillSetting = styled(AiFillSetting)`
  ${IconStyled};
`;

export const StyledBihome = styled(AiOutlineHome)`
  ${IconStyled};
`;

export const StyledAiOutlineSchedule = styled(AiOutlineSchedule)`
  ${IconStyled};
`;

export const StyledAiOutlineDesktop = styled(AiOutlineDesktop)`
  ${IconStyled};
`;

export const StyledAiOutlineNotification = styled(AiOutlineNotification)`
  ${IconStyled};
`;

export const StyledAiOutlineMore = styled(AiOutlineMore)`
  ${IconStyled};
`;

export const StyledAiFillExperiment = styled(AiFillExperiment)`
  ${ThemeIconStyled};
`;

export const StyledAiFillCaretRight = styled(AiFillCaretRight)`
  ${ThemeIconStyled};
`;

export const StyledAiFillDatabase = styled(AiFillDatabase)`
  ${ThemeIconStyled};
`;

export const StyledAiOutlineReconciliation = styled(AiOutlineReconciliation)`
  ${ThemeIconStyled};
`;

export const StyledAiOutlineWarning = styled(AiOutlineWarning)`
  ${ThemeIconStyled};
`;

export const StyledAiOutlineUsergroupAdd = styled(AiOutlineUsergroupAdd)`
  ${ThemeIconStyled};
`;

export const StyledAiOutlineDiff = styled(AiOutlineDiff)`
  ${ThemeIconStyled};
`;

export const StyledAiOutlineVideoCamera = styled(AiOutlineVideoCamera)`
  ${ThemeIconStyled};
`;

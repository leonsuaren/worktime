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
  AiOutlineHdd,
  AiOutlineReconciliation,
  AiOutlineWarning,
  AiOutlineUsergroupAdd,
  AiOutlineDiff,
  AiOutlineVideoCamera,
  AiOutlineCalendar,
  AiOutlineCopy,
  AiOutlineBehance,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineRead,
  AiOutlineSafety
} from 'react-icons/ai';


const IconStyled = () => {
  return (
    css`
      font-size: 20px;
      color: ${p => p.theme.fontColor};
    `
  )
};

const Disabled = ({disabled}) => {
  if (disabled) {
    return (
      css`
      color: #a09b9b;
      `
    )
  }
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
  ${Disabled}
`;

export const StyledAiFillCaretRight = styled(AiFillCaretRight)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineHdd = styled(AiOutlineHdd)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineReconciliation = styled(AiOutlineReconciliation)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineWarning = styled(AiOutlineWarning)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineUsergroupAdd = styled(AiOutlineUsergroupAdd)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineDiff = styled(AiOutlineDiff)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineVideoCamera = styled(AiOutlineVideoCamera)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineBehance = styled(AiOutlineBehance)`
  ${ThemeIconStyled}
`;

export const StyledAiOutlineUser = styled(AiOutlineUser)`
  ${ThemeIconStyled}
`;

export const StyledAiOutlineHeart = styled(AiOutlineHeart)`
  ${ThemeIconStyled}
`;

export const StyledAiOutlineRead = styled(AiOutlineRead)`
  ${ThemeIconStyled}
`;

export const StyledAiOutlineSafety = styled(AiOutlineSafety)`
  ${ThemeIconStyled}
`;

export const StyledAiOutlineCalendar = styled(AiOutlineCalendar)`
    color: ${p => p.theme.iconColor};
    align-self: center;
    font-size: 50px;
`;

export const StyledAiOutlineCopy = styled(AiOutlineCopy)`
    color: ${p => p.theme.iconColor};
    align-self: center;
    font-size: 60px;
`;

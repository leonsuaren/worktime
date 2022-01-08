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
  AiOutlineSafety,
  AiOutlineLeft,
  AiOutlineTeam,
  AiOutlineBug,
  AiOutlineAudio,
  AiOutlineSafetyCertificate,
  AiOutlineSelect,
  AiOutlineSound,
  AiOutlineLink,
  AiOutlineApartment,
  AiOutlineExclamation,
  AiOutlineSearch,
  AiOutlineCrown,
  AiOutlineBook,
  AiOutlineStar,
  AiOutlineSnippets,
  AiOutlineToTop,
  AiOutlineSketch,
  AiOutlineDashboard,
  AiOutlineFire,
  AiOutlineBgColors,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiFillTool,
  AiOutlineExclamationCircle,
  AiOutlineCloseCircle,
  AiOutlineBulb,
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlineLike,
  AiOutlineDislike
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

export const StyledAiOutlineLike = styled(AiOutlineLike)`
  ${IconStyled};
  color: #CCCCCC;
`;

export const StyledAiOutlineDislike = styled(AiOutlineDislike)`
  ${IconStyled};
  color: #CCCCCC;
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

export const StyledAiOutlineExclamationCircle = styled(AiOutlineExclamationCircle)`
  font-size: 40px;
`;

export const StyledAiOutlineCloseCircle = styled(AiOutlineCloseCircle)`
  font-size: 40px;
`;

export const StyledAiOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  font-size: 40px;
`;

export const StyledAiOutlineBulb = styled(AiOutlineBulb)`
  font-size: 40px;
`;

export const StyledAiFillTool = styled(AiFillTool)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineBgColors = styled(AiOutlineBgColors)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineMail = styled(AiOutlineMail)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineCaretDown = styled(AiOutlineCaretDown)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineCaretUp = styled(AiOutlineCaretUp)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineToTop = styled(AiOutlineToTop)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineFire = styled(AiOutlineFire)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineDashboard = styled(AiOutlineDashboard)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSketch = styled(AiOutlineSketch)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSnippets = styled(AiOutlineSnippets)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineBook = styled(AiOutlineBook)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineStar= styled(AiOutlineStar)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineCrown = styled(AiOutlineCrown)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSearch = styled(AiOutlineSearch)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineApartment = styled(AiOutlineApartment)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineExclamation = styled(AiOutlineExclamation)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineLink = styled(AiOutlineLink)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineAudio = styled(AiOutlineAudio)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineBug = styled(AiOutlineBug)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSafetyCertificate = styled(AiOutlineSafetyCertificate)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSound = styled(AiOutlineSound)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineSelect = styled(AiOutlineSelect)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiFillCaretRight = styled(AiFillCaretRight)`
  ${ThemeIconStyled};
  ${Disabled}
`;

export const StyledAiOutlineTeam = styled(AiOutlineTeam)`
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

export const StyledNotFoundWarning = styled(AiOutlineWarning)`
  ${ThemeIconStyled};
  font-size: 150px;
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

export const StyledAiOutlineLeft = styled(AiOutlineLeft)`
  ${IconStyled};
  align-self: flex-end;
  cursor: pointer;
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

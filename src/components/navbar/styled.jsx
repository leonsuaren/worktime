import styled, { css } from 'styled-components';
import { AiOutlineHome, AiOutlineSchedule, AiOutlineDesktop, AiOutlineNotification, AiOutlineMore } from 'react-icons/ai';
import { Link as ReactRouterDomLink} from 'react-router-dom';

export const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
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

const Link = ({isActive, children, ...props}) => {
  return(
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

export const LinkTo = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: center;
  box-sizing: border-box;
  ${active}
`;
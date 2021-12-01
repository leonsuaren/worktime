import styled, { css } from 'styled-components';
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

export const NavigationWrapper = styled.div`
  display: ${p => p.isActive ? 'none' : 'flex'};
`;

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
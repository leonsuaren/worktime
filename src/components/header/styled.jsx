import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

export const Head =  styled.div`
  width: 100vw;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${p => p.theme.headerBackground};
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const HeadTitle = styled.h3`
  color: ${p => p.theme.fontColor};
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0;
`;

export const HeadTime = styled.div`
  color: ${p => p.theme.fontColor};
  font-size: .8rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: start;
  align-items: start;
  margin: 0;
  font-weight: 600;
`;

export const HeadAvatar = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const DefaultContent = styled.p`
  color: ${p => p.theme.fontColor};
  margin: 0;
  padding: 0;
  font-weight: 900;
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
`;

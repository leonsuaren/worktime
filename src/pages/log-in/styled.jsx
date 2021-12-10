import styled from "styled-components";
import { Link as ReactRouterDomLink } from 'react-router-dom';

export const StyledLogInWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.theme.headerBackground};
  margin: 0;
  box-sizing: border-box;
`;

export const LoginModal = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-items: center;
  align-items: center;
  width: 300px;
  height: 200px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border-radius: 5px;
  margin: auto auto;
  background: ${p => p.theme.bodyBackground};
`;

export const Title = styled.h3`
  font-weight: bold;
`;

const Link = ({children, ...props}) => {
  return(
  <ReactRouterDomLink {...props}>
    {children}
  </ReactRouterDomLink>
  )
}

export const LinkTo = styled(Link)`
  text-transform: none;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  justify-items: end;
`;

export const Input = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: ${p => p.theme.fontColor};
  font-size: .9rem;
  background-color: ${p => p.theme.bodyBackground};
  margin-left: 10px;
`;

export const Span = styled.span`
  font-size: .9rem;
  color: ${p => p.theme.fontColor};
  font-weight: bold;
`;
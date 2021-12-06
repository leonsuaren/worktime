import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

const Link = ({isActive, children, ...props}) => {
  return(
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

export const LinkTo = styled(Link)`
  text-decoration: none;
`;
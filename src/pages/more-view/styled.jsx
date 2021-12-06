import styled, { css } from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

const Link = ({ isActive, children, disabled, ...props }) => {
  console.log(disabled)

  return (
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

const disabled = ({ disabled }) => {
  if (disabled) {
    return (
      css`
        pointer-events: none;
        cursor: default;
      `
    )
  }
};

export const LinkTo = styled(Link)`
  text-decoration: none;
  ${disabled}
`;
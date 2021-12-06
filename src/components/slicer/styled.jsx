import styled, { css } from 'styled-components';

const onHover = ({ hoverOver }) => {
  if (hoverOver) {
  return (
    css`
    &:hover {
      background: ${p => p.theme.iconColor};
    }`
    )
  };
};

export const SlicerWrapper = styled.div`
  display: grid;
  grid-template-columns: ${p => p.basic ? '1fr' : '15% 70% 15%' };
  justify-items: center;
  align-content: center;
  width: 100%;
  min-height: 40px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: none;
  margin: 5px 0;
  background: ${p => p.active ? p.theme.iconColor : '#FFFFFF'};
  ${onHover}
`;

export const Span = styled.p`
  color: ${p => p.theme.fontColor};
  display: block;
  font-size: .7rem;
  font-weight: bold;
`;

export const SlicerTitleWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  font-weight: bold;
  width: 100%;
  height: 40px;
  border: none;
  margin: 5px 0;
  background: ${p => p.theme.iconColor};
`;
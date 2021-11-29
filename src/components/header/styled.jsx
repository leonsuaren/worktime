import styled from 'styled-components';

export const Head =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: ${p => p.theme.headerBackground};
`;

export const HeadTitle = styled.h1`
  color: ${p => p.theme.fontColor}
`;

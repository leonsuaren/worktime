import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${p => p.theme.headerBackground};
  z-index: 10;
`;

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto auto;
  min-width: 100px;
  min-height: 100px;
`;
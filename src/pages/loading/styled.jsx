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

export const Work = styled.h1`
  color: #FFFFFF;
  font-size: 2.5rem;
  margin-right: 5px;
  font-family: system-ui;
`;

export const Time = styled.h1`
  color: #FFFFFF;
  font-size: 2.5rem;
  margin-left: 5px;
  font-family: system-ui;
`;
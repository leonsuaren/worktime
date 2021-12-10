import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #FFFFFF;
  z-index: 10;
`;

export const NotFoundContect = styled.div`
  display: grid;
  grid-template-rows: 60% 20% 20%;
  align-items: center;
  justify-items: center;
  margin: auto auto;
  min-width: 100px;
  min-height: 100px;
`;

export const StatusCode = styled.h1`
  color: ${p => p.theme.fontColor};
`;

export const StatusMessage = styled.h3`
  color: ${p => p.theme.fontColor}
`;
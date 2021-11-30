import styled from 'styled-components';

export const Head =  styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  background: ${p => p.theme.headerBackground};
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
  display: flex;
  margin: 0;
  font-weight: 600;
`;

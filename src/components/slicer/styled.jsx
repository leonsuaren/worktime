import styled from 'styled-components';

export const SlicerWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 70% 20%;
  justify-items: center;
  align-content: center;
  width: 100%;
  min-height: 40px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: none;
  margin: 5px 0;
  background: white;
`;

export const Span = styled.p`
  color: ${p => p.theme.fontColor};
  display: block;
  font-size: .7rem;
  font-weight: bold;
`;
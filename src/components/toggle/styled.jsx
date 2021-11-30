import styled from 'styled-components';

export const ToggleWraper = styled.div`
  width: 30px;
  min-width: 30px;
  height: 15px;
  border-radius: 25px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: 1px solid ${p => p.theme.fontColor};
  margin:  auto 0;
  display: flex;
  background: '#FFFFFF';
`;

export const Notch = styled.div`
  height: 11px;
  width: 11px;
  border: 1px solid ${p => p.theme.fontColor};
  margin: 1px;
  background: ${p => p.theme.headerBackground};
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${ p => p.isActive ? '14px' : '1px' });
`;
import styled from 'styled-components';

export const StyledActionCardInput = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-items: center;
  align-items: center;
  min-height: 80px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: ${p => p.theme.borderColor};
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  background: white;
`;

export const NotificationContentInput = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-gap: 5px;
  width: 90%;
  padding: 20px;
`;

export const Input = styled.input`
  margin-left: 10px;
  width: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: .8rem;
`;

export const Label = styled.label`
  width: 100%;
  color: ${p => p.theme.fontColor};
  font-weight: bold;
  font-size: .8rem;
`;
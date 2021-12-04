import styled, { css } from 'styled-components';

export const StyledActionCard = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: center;
  align-content: center;
  min-height: 80px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: ${p => p.theme.borderColor};
  border-radius: 5px;
  margin: 5px;
  background: white;
`;

export const NotificationContent = styled.div`
  display: grid;
  grid-template-rows: 30% 20% 20% 30%;
  width: 90%;
  padding: 10px;
`;

export const FirstContactContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 90%;
  padding: 10px;
`;

export const Title = styled.h5`
  color: ${p => p.theme.fontColor};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0;
  margin: 5px;
  font-family: 'fangsong';
`;

export const Description = styled.p`
  color: ${p => p.theme.fontColor};
  padding: 0;
  margin: 5px;
  font-family: 'fangsong';
`;

export const Day = styled.p`
  color: ${p => p.theme.iconColor};
  padding: 0;
  margin: 5px;
  font-family: 'fangsong';
`;

export const Time = styled.h5`
  color: ${p => p.theme.fontColor};
  font-weight: bold;
  padding: 0;
  margin: 5px;
  font-family: 'fangsong';
`;

export const Location = styled.p`
  color: ${p => p.theme.iconColor};
  font-weight: bold;
  padding: 0;
  margin: 5px;
`;

const inputStyled = () => {
  return css`
    padding: 1px 0;
    margin: 5px;
    border: none;
    background: white;
    font-family: 'fangsong';
  `
};

export const TitleInput = styled.input`
  color: ${p => p.theme.fontColor};
  font-weight: bold;
  font-size: 1.2rem;
  ${inputStyled}
`;

export const TimeInput = styled.input`
  color: ${p => p.theme.fontColor};
  font-weight: bold;
  ${inputStyled}
`;

export const DayInput = styled.input`
  color: ${p => p.theme.iconColor};
  ${inputStyled}
`;

export const LocationInput = styled.input`
  color: ${p => p.theme.iconColor};
  padding: 0;
  margin: 5px;
  border: none;
  background: white;
`;



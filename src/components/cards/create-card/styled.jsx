import styled from 'styled-components';

export const StyledCreateCard = styled.div`
  display: grid;
  grid-template-rows: 5% 5% 5% 20% 10% 55%;  
  justify-items: center;
  align-content: center;
  min-height: 900px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: ${p => p.theme.borderColor};
  border-radius: 5px;
  margin: 5px;
  padding: 10px 5px;
  background: white;
`;

export const Title = styled.h3`
  justify-self: flex-start;
  font-weight: bold;
  font: status-bar;
`;

export const CheckBoxSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
`;

export const CheckDepartment = styled.div`
  display: grid;
  grid-template-rows: 0fr 1fr 1fr 1fr 1fr;
  width: 90%;
  height: 90%;
  margin: 2px;
  padding: 2px;
  border: ${p => p.theme.borderColor};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const FloatingTitle = styled.span`
    position: relative;
    left: -4px;
    top: -11px;
    background: white;
    padding: 0px;
    margin: 0px;
    font-weight: bold;
    justify-self: flex-start;
`;
export const CheckAndSelection = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;
  width: 100%;
`;

export const CheckTypeOfCard = styled.div`
    display: grid;
    grid-template-rows: 0fr 1fr 1fr;
    width: 90%;
    height: 60%;
    margin: 2px;
    padding: 2px;
    border: ${p => p.theme.borderColor};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const SelectChannel = styled.div`
    display: flex;
    width: 100%;
    margin: 2px;
    padding: 2px;
    align-items: center;
    justify-content: flex-start;
`;

export const Label = styled.label`
  font-weight: bold;
  font: status-bar;
`;

export const Input = styled.input`
  display: inline-block;
`;

export const Span = styled.span`
  font-size: .8rem;
  font-weight: bold;
`;

export const AddingTextSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;
`;

export const StyledChooseDepartment = styled.div`
  height: 250px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: ${p => p.theme.borderColor};
`;

export const Option = styled.option`
  width: 100%;
  height: 200px;
`;

export const Select = styled.select`
  padding: 0 5px 0 5px;
  height: 40px;
  width: 80%;
  margin-left: 30px;
  margin-right: 10px;
  background-color: white;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid '#cccccc';
`;
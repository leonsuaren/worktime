import styled from 'styled-components';

export const StyledCreateCard = styled.form`
  display: flex; 
  flex-direction: column;
  justify-items: center;
  align-content: center;
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

export const SelectDepartment = styled.div`
   display: flex;
    width: 100%;
    margin: 10px 5px;
    padding: 2px;
    align-items: center;
    justify-content: flex-start;
`;

export const SelectType = styled.div`
     display: flex;
    width: 100%;
    margin: 10px 5px;
    padding: 2px;
    align-items: center;
    justify-content: flex-start;
`;

export const SelectChannel = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 5px;
    padding: 2px;
    align-items: center;
    justify-content: flex-start;
`;

export const CreateContent = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 5px;
    align-items: center;
    justify-content: flex-start;
`;

export const SelectImage = styled.div`

`;

export const Label = styled.label`
  font-weight: bold;
  font: status-bar;
  width: 100px;
`;

export const Input = styled.input`
  display: inline-block;
  height: 30px;
  width: 100%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  margin: 10px;
`;

export const Span = styled.span`
  font-size: .8rem;
  font-weight: bold;
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

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 5px;
  border: none;
  background-color: ${p => p.cancel ? '#F23759' : p.theme.iconColor};
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  min-width: 80px;
  cursor: pointer;
`;
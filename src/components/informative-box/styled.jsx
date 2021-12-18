import styled from 'styled-components';

export const InformativeBoxWrapper = styled.div`
  margin: 0;
  padding: 0px 10px 10px 10px;
  display: block;
`;

export const InformativeContainer = styled.div`
  display: grid;
  grid-template-rows: 20% 60% 20%;
  grid-gap: 5px;
  margin: 0;
  box-sizing: border-box;
  background: #FFFFFF;
  padding: 15px;
  border-top: none;
  height: 220px;
  border-left: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
`;

export const Description = styled.h5`
  color: ${p => p.theme.fontColor};
  align-self: flex-end;
`;

export const TextArea = styled.textarea`

`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`;
import React, { useState } from 'react';
import { InformativeBoxWrapper, InformativeContainer, ButtonContainer, Description , TextArea} from './styled';
import { ActionButton } from '../../components/button/action-button';

export const InformativeBox = ({ description, type }) => {
  const [ addSuggestion, setAddSuggestion ] = useState('');
  let suggestion = {user: 'Leon Suarez', description: addSuggestion, type: type}

  const handleOnAddSuggestion = (event) => {
    setAddSuggestion(event.target.value);
  };

  const handleOnSaveSuggestion = () => {
    localStorage.setItem(`${type}`, JSON.stringify(suggestion));
  };
  
  return (
    <InformativeBoxWrapper>
      <InformativeContainer>
        <Description>{ description }</Description>
        <TextArea type="textarea" name="suggestion" rows="5" cols="5" maxLength="200" onChange={handleOnAddSuggestion}/>
        <ButtonContainer>
          <ActionButton text='Send' onClick={handleOnSaveSuggestion}/>
          <ActionButton text='Cancel' cancel />
        </ButtonContainer>
      </InformativeContainer>
    </InformativeBoxWrapper>
  )
};
import React, { useState, useContext } from 'react';

import { AlertContext } from '../../context';

import { InformativeBoxWrapper, InformativeContainer, ButtonContainer, Description , TextArea} from './styled';
import { ActionButton } from '../../components/button/action-button';

export const InformativeBox = ({ description, type, handleOnShowSuggestionBox, handleOnShowMaintenanceBox }) => {
  const alertContext = useContext(AlertContext);
  const [ addSuggestion, setAddSuggestion ] = useState('');
  const [ addMaintenanceSuggestion, setAddMaintenanceSuggestion ] = useState('');
  let suggestion = {user: 'Leon Suarez', description: addSuggestion, type: type}
  let maintenance = {user: 'Leon Suarez', description: addMaintenanceSuggestion, type: type}

  const handleOnAddSuggestion = (event) => {
    setAddSuggestion(event.target.value);
  };
  
  const hadleOnAddMaintenanceSuggestion = (event) => {
    setAddMaintenanceSuggestion(event.target.value);
  };

  const handleOnSaveSuggestion = () => {
    localStorage.setItem('Suggestion', JSON.stringify(suggestion));
    handleOnShowSuggestionBox(false);
    alertContext.onShowAlert(true)
  };

  const handleOnSaveMaintenanceSuggestion = () => {
    localStorage.setItem('Maintenance', JSON.stringify(maintenance));
    handleOnShowMaintenanceBox(false);
  };

  const handleOnCancelSuggestion = () => {
    handleOnShowSuggestionBox(false);
  };

  const handleOnCancelMaintanenceSuggestion = () => {
    handleOnShowMaintenanceBox(false);
  };
  //disabled={addSuggestion && addMaintenanceSuggestion === '' ? true : false}

  return (
    <InformativeBoxWrapper>
      <InformativeContainer>
        <Description>{ description }</Description>
        <TextArea type="textarea" name="suggestion" rows="5" cols="5" maxLength="200" onChange={type === 'Suggestion' ? handleOnAddSuggestion : hadleOnAddMaintenanceSuggestion} />
        <ButtonContainer>
          <ActionButton text='Send' onClick={type === 'Suggestion' ? handleOnSaveSuggestion : handleOnSaveMaintenanceSuggestion}/>
          <ActionButton text='Cancel' cancel onClick={type === 'Suggestion' ? handleOnCancelSuggestion : handleOnCancelMaintanenceSuggestion}/>
        </ButtonContainer>
      </InformativeContainer>
    </InformativeBoxWrapper>
  )
};
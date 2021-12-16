import React, { Fragment, useContext, useState } from 'react';

import { LanguageContext } from '../../../context';
import { AlertContext } from '../../../context';

import { Alert } from '../../../components/alert';
import { SlicerTitle, Slicer } from '../../../components/slicer';
import { InformativeBox } from '../../../components/informative-box';
import { ButtonStyled } from './styled';
import {
  StyledAiOutlineCaretDown,
  StyledAiOutlineCaretUp,
  StyledAiFillCaretRight,
  StyledAiOutlineHdd,
  StyledAiOutlineReconciliation,
  StyledAiFillTool,
  StyledAiOutlineDiff, Hr
} from './../../../global';

export const FirstContact = () => {
  const languageContext = useContext(LanguageContext);
  const alertContext = useContext(AlertContext);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [ showMaintenanceBox, setShowMaintenanceBox ] = useState(false);

  const handleOnShowSuggestionBox = (suggestion) => {
    setShowSuggestionBox(suggestion);
  };

  const handleOnShowMaintenanceBox = (suggestion) => {
    setShowMaintenanceBox(suggestion);
  };


  return (
    <Fragment>
      {
        alertContext.showAlert ? <Alert 
        description={"Thanks for your Suggestion"}  
        showAlert={alertContext.showAlert}
        type={"Danger"}
        /> : ''
      }
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.firstContact} />
      <ButtonStyled onClick={handleOnShowSuggestionBox}>
        <Slicer box addSkeleton icon={<StyledAiOutlineDiff />} description={languageContext.language.suggestionBox} action={showSuggestionBox ? <StyledAiOutlineCaretUp /> : <StyledAiOutlineCaretDown/>} />
      </ButtonStyled>
      {
        showSuggestionBox ? <InformativeBox description={"Please! Leave you Suggestion"} type={'Suggestion'} handleOnShowSuggestionBox={handleOnShowSuggestionBox}/> : ''
      }
      <ButtonStyled onClick={handleOnShowMaintenanceBox}>
        <Slicer box addSkeleton icon={<StyledAiFillTool />} description={languageContext.language.maintSuggestionBox} action={showMaintenanceBox ? <StyledAiOutlineCaretUp /> : <StyledAiOutlineCaretDown/>} />
      </ButtonStyled>
      {
        showMaintenanceBox ? <InformativeBox description={"Please! Leave your Maintenance Suggestion"} type={'Maintenance'} handleOnShowMaintenanceBox={handleOnShowMaintenanceBox}/> : ''
      }
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.survey} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineReconciliation />} description={"Uplift Cards"} action={<StyledAiFillCaretRight />} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineHdd />} description={"Chrismas Diner"} action={<StyledAiFillCaretRight />} />
      <Hr />
    </Fragment>
  )
};
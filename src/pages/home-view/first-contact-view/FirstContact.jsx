import React, { Fragment, useContext, useState } from 'react';
import { LanguageContext } from '../../../context';
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
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [ showMaintenanceBox, setShowMaintenanceBox ] = useState(false);

  const handleOnShowSuggestionBox = () => {
    setShowSuggestionBox(s => !s);
  };

  const handleOnShowMaintenanceBox = () => {
    setShowMaintenanceBox(s => !s);
  };

  return (
    <Fragment>
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.firstContact} />
      <ButtonStyled onClick={handleOnShowSuggestionBox}>
        <Slicer box addSkeleton icon={<StyledAiOutlineDiff />} description={languageContext.language.suggestionBox} action={showSuggestionBox ? <StyledAiOutlineCaretUp /> : <StyledAiOutlineCaretDown/>} />
      </ButtonStyled>
      {
        showSuggestionBox ? <InformativeBox description={"Please! Leave you Suggestion"} type={'Suggestion'}/> : ''
      }
      <ButtonStyled onClick={handleOnShowMaintenanceBox}>
        <Slicer box addSkeleton icon={<StyledAiFillTool />} description={languageContext.language.maintSuggestionBox} action={showMaintenanceBox ? <StyledAiOutlineCaretUp /> : <StyledAiOutlineCaretDown/>} />
      </ButtonStyled>
      {
        showMaintenanceBox ? <InformativeBox description={"Please! Leave your Maintenance Suggestion"} type={'Maintenance'}/> : ''
      }
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.survey} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineReconciliation />} description={"Uplift Cards"} action={<StyledAiFillCaretRight />} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineHdd />} description={"Chrismas Diner"} action={<StyledAiFillCaretRight />} />
    </Fragment>
  )
};
import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../../../context';
import { SlicerTitle, Slicer } from '../../../components/slicer';
import {
  StyledAiFillCaretRight,
  StyledAiFillDatabase,
  StyledAiOutlineReconciliation,
  StyledAiOutlineUsergroupAdd,
  StyledAiOutlineDiff, Hr
} from './../../../global';

export const FirstContact = () => {
  const languageContext = useContext(LanguageContext);


  return(
    <Fragment>
      <Hr />
      <SlicerTitle description={languageContext.language.firstContact} />
      <Slicer hoverOver icon={<StyledAiOutlineDiff />} description={languageContext.language.suggestionBox} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiOutlineUsergroupAdd />} description={languageContext.language.mantSuggestionBox} action={<StyledAiFillCaretRight />} />
      <Hr />
      <SlicerTitle description={languageContext.language.survey} />
      <Slicer hoverOver icon={<StyledAiOutlineReconciliation />} description={"Uplift Cards"} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiFillDatabase />} description={"Chrismas Diner"} action={<StyledAiFillCaretRight />} />
    </Fragment>
  )
};
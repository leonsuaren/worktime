import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../../../context';
import { SlicerTitle, Slicer } from '../../../components/slicer';
import {
  StyledAiFillCaretRight,
  StyledAiOutlineHdd,
  StyledAiOutlineReconciliation,
  StyledAiOutlineUsergroupAdd,
  StyledAiOutlineDiff, Hr
} from './../../../global';

export const FirstContact = () => {
  const languageContext = useContext(LanguageContext);


  return(
    <Fragment>
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.firstContact} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineDiff />} description={languageContext.language.suggestionBox} action={<StyledAiFillCaretRight />} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineUsergroupAdd />} description={languageContext.language.mantSuggestionBox} action={<StyledAiFillCaretRight />} />
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.survey} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineReconciliation />} description={"Uplift Cards"} action={<StyledAiFillCaretRight />} />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineHdd />} description={"Chrismas Diner"} action={<StyledAiFillCaretRight />} />
    </Fragment>
  )
};
import React, { Fragment } from 'react';
import { SlicerTitle, Slicer } from '../../../components/slicer';
import {
  StyledAiFillCaretRight,
  StyledAiFillDatabase,
  StyledAiOutlineReconciliation,
  StyledAiOutlineUsergroupAdd,
  StyledAiOutlineDiff
} from './../../../global';

export const FirstContact = () => {
  return(
    <Fragment>
      <SlicerTitle description="We want to hear you!!" />
      <Slicer icon={<StyledAiOutlineDiff />} description={"Suggestion Box"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiOutlineUsergroupAdd />} description={"Maintenance Suggestion Box"} action={<StyledAiFillCaretRight />} />
      <SlicerTitle description="Survey" />
      <Slicer icon={<StyledAiOutlineReconciliation />} description={"Uplift Cards"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiFillDatabase />} description={"Chrismas Diner"} action={<StyledAiFillCaretRight />} />
    </Fragment>
  )
};
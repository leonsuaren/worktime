import React, { Fragment } from 'react';
import { Slicer } from '../../components/slicer';
import { Toggle } from '../../components/toggle';
import {
  StyledAiFillExperiment, Hr
} from '../../global';

export const Settings = () => {
  return (
    <Fragment>
      <Hr />
      <Slicer addSkeleton hoverOver icon={<StyledAiFillExperiment />} description={"Change Theme"} action={<Toggle />} />
      <Hr />
    </Fragment>
  )
};
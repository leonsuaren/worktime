import React, { Fragment } from 'react';
import { Slicer } from '../../components/slicer';
import { Toggle } from '../../components/toggle';
import { StyledAiFillExperiment } from '../../global';

export const Settings = () => {
  return (
    <Fragment>
      <Slicer icon={<StyledAiFillExperiment />} description={"Change Theme"} action={<Toggle />} />
    </Fragment>
  )
};
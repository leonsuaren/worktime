import React, { Fragment } from 'react';
import { Slicer } from '../../components/slicer';
import { Toggle } from '../../components/toggle';
import {
  StyledAiFillExperiment,
  StyledAiFillCaretRight,
  StyledAiFillDatabase,
  StyledAiOutlineReconciliation,
  StyledAiOutlineWarning,
  StyledAiOutlineUsergroupAdd,
  StyledAiOutlineDiff,
  StyledAiOutlineVideoCamera,
  StyledAiOutlineBehance
} from '../../global';
import { LinkTo } from './styled';

export const Settings = () => {
  return (
    <Fragment>
      <Slicer hoverOver icon={<StyledAiOutlineDiff />} description={"Manage Shifts"} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiOutlineUsergroupAdd />} description={"Add a New Associated"} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiFillDatabase />} description={"Add a Card"} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiOutlineReconciliation />} description={"Add a Survey"} action={<StyledAiFillCaretRight />} />
      <LinkTo to='/settings/add-notifications'>
        <Slicer hoverOver icon={<StyledAiOutlineWarning />} description={"Add a Notification"} action={<StyledAiFillCaretRight />} />
      </LinkTo>
      <Slicer hoverOver icon={<StyledAiOutlineVideoCamera />} description={"Manage Channels"} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver icon={<StyledAiFillExperiment />} description={"Change Theme"} action={<Toggle />} />
      <LinkTo to='/settings/change-language'>
        <Slicer hoverOver icon={<StyledAiOutlineBehance />} description={"Change Language (temporal)"} action={<StyledAiFillCaretRight />} />
      </LinkTo>
    </Fragment>
  )
};
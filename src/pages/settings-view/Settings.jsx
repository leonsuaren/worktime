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
      <Slicer icon={<StyledAiOutlineDiff />} description={"Manage Shifts"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiOutlineUsergroupAdd />} description={"Add a New Associated"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiFillDatabase />} description={"Add a Card"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiOutlineReconciliation />} description={"Add a Survey"} action={<StyledAiFillCaretRight />} />
      <LinkTo to='/settings/add-notifications'>
        <Slicer icon={<StyledAiOutlineWarning />} description={"Add a Notification"} action={<StyledAiFillCaretRight />} />
      </LinkTo>
      <Slicer icon={<StyledAiOutlineVideoCamera />} description={"Manage Channels"} action={<StyledAiFillCaretRight />} />
      <Slicer icon={<StyledAiFillExperiment />} description={"Change Theme"} action={<Toggle />} />
      <LinkTo to='/settings/change-language'>
        <Slicer icon={<StyledAiOutlineBehance />} description={"Change Language (temporal)"} action={<StyledAiFillCaretRight />} />
      </LinkTo>
    </Fragment>
  )
};
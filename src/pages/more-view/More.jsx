import React, { Fragment, useContext } from 'react';

import { LanguageContext } from '../../context';

import { Slicer } from '../../components/slicer';
import {
  Hr,
  StyledAiFillCaretRight,
  StyledAiOutlineHdd,
  StyledAiOutlineReconciliation,
  StyledAiOutlineWarning,
  StyledAiOutlineUsergroupAdd,
  StyledAiOutlineDiff,
  StyledAiOutlineVideoCamera,
  StyledAiOutlineBehance,
  StyledAiOutlineUser,
  StyledAiOutlineHeart,
  StyledAiOutlineRead,
  StyledAiOutlineSafety
} from '../../global';
import { LinkTo } from './styled';

export const More = () => {
  const languageContext = useContext(LanguageContext);
  const userPrivilege = localStorage.getItem('privilege');

  return (
    <Fragment>
      <Hr />
      <Slicer hoverOver icon={<StyledAiOutlineUser />} description={languageContext.language.personalInformation} action={<StyledAiFillCaretRight />}></Slicer>
      <Slicer hoverOver icon={<StyledAiOutlineHeart />} description={languageContext.language.myBenefits} action={<StyledAiFillCaretRight />}></Slicer>
      <Hr />
      <Slicer hoverOver icon={<StyledAiOutlineRead />} description={languageContext.language.trainingCenter} action={<StyledAiFillCaretRight />}></Slicer>
      <Slicer hoverOver icon={<StyledAiOutlineSafety />} description={languageContext.language.badges} action={<StyledAiFillCaretRight />}></Slicer>
      <Hr />
      {
        userPrivilege === 'Operator' ?
          <div>
            <LinkTo to='/settings/change-language'>
              <Slicer hoverOver icon={<StyledAiOutlineBehance />} description={languageContext.language.changeLanguage} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <Hr />
          </div> : ''
      }
      {
        userPrivilege === 'Operator' ? '' :
          <div>
            <LinkTo to="" >
              <Slicer hoverOver  icon={<StyledAiOutlineDiff />} description={"Manage Shifts"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <LinkTo to="" >
              <Slicer hoverOver  icon={<StyledAiOutlineUsergroupAdd />} description={"Add a New Associated"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <LinkTo to="" >
              <Slicer hoverOver  icon={<StyledAiOutlineHdd />} description={"Add a Card"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <LinkTo to="" >
              <Slicer hoverOver  icon={<StyledAiOutlineReconciliation />} description={"Add a Survey"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <LinkTo to='/more/add-notifications' >
              <Slicer hoverOver  icon={<StyledAiOutlineWarning />} description={"Add a Notification"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <LinkTo to='' >
              <Slicer hoverOver  icon={<StyledAiOutlineVideoCamera />} description={"Manage Channels"} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <Hr />
          </div>
      }
    </Fragment>
  )
};
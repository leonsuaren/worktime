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
  StyledAiOutlineSafety,
  StyledAiOutlineMail
} from '../../global';
import { LinkTo } from './styled';

export const More = () => {
  const languageContext = useContext(LanguageContext);
  const userPrivilege = localStorage.getItem('privilege');
  const disabled = userPrivilege === 'Admin' ? false : true;

  return (
    <Fragment>
      <Hr />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineUser />} description={languageContext.language.personalInformation} action={<StyledAiFillCaretRight />}></Slicer>
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineHeart />} description={languageContext.language.myBenefits} action={<StyledAiFillCaretRight />}></Slicer>
      <Hr />
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineRead />} description={languageContext.language.trainingCenter} action={<StyledAiFillCaretRight />}></Slicer>
      <Slicer addSkeleton hoverOver icon={<StyledAiOutlineSafety />} description={languageContext.language.badges} action={<StyledAiFillCaretRight />}></Slicer>
      <Hr />
      {
        userPrivilege === 'Operator' ?
          <div>
            <LinkTo to='/settings/change-language'>
              <Slicer addSkeleton hoverOver icon={<StyledAiOutlineBehance />} description={languageContext.language.changeLanguage} action={<StyledAiFillCaretRight />} />
            </LinkTo>
            <Hr />
          </div> : ''
      }
      {
        userPrivilege === 'Operator' ? '' :
          <div>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineDiff disabled={disabled} />} description={"Manage Shifts"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineUsergroupAdd disabled={disabled}/>} description={"Add a New Associated"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='/more/add-card' disabled={disabled}  >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineHdd disabled={disabled}/>} description={"Add a Card"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineReconciliation disabled={disabled}/>} description={"Add a Survey"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='/settings/add-notifications' disabled={disabled}>
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineWarning disabled={disabled}/>} description={"Add a Notification"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled} >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineVideoCamera disabled={disabled}/>} description={"Manage Channels"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled} >
              <Slicer disabled={disabled} addSkeleton hoverOver  icon={<StyledAiOutlineMail disabled={disabled}/>} description={"Read Suggestions"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <Hr />
          </div>
      }
    </Fragment>
  )
};
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
  const disabled = userPrivilege === 'Admon' ? false : true;

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
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineDiff disabled={disabled} />} description={"Manage Shifts"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineUsergroupAdd disabled={disabled}/>} description={"Add a New Associated"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineHdd disabled={disabled}/>} description={"Add a Card"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled}  >
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineReconciliation disabled={disabled}/>} description={"Add a Survey"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='/more/add-notifications' disabled={disabled}>
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineWarning disabled={disabled}/>} description={"Add a Notification"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <LinkTo to='' disabled={disabled} >
              <Slicer disabled={disabled} hoverOver  icon={<StyledAiOutlineVideoCamera disabled={disabled}/>} description={"Manage Channels"} action={<StyledAiFillCaretRight disabled={disabled}/>} />
            </LinkTo>
            <Hr />
          </div>
      }
    </Fragment>
  )
};
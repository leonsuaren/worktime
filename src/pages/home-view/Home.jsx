import React, { Fragment, useContext } from 'react';

import { AddNotificationContext } from '../../context';
import { LanguageContext } from '../../context';

import { ActionCard } from '../../components/cards/action-card';
import { LinkTo } from './styled';

export const Home = () => {
  const addNotificationContext = useContext(AddNotificationContext);
  const languageContext = useContext(LanguageContext);
  const showNotification = addNotificationContext.addNotification;
  const fullNotification = addNotificationContext.fullNotification;

  return (
    <Fragment>
      <ActionCard addSkeleton type='notification' title={languageContext.language.nextShift} day="Tomorrow Dec 5" time="5:00 AM - 3:00 PM" location="CFC" />
      <LinkTo to="first-contact">
        <ActionCard addSkeleton title={languageContext.language.firstContact} description={languageContext.language.firstContactMsg} />
      </LinkTo>
      {showNotification ? <ActionCard addSkeleton type='notification' title={fullNotification.addTitle} day={fullNotification.addDay} time={fullNotification.addTime} location={fullNotification.addLocation} /> : ''}
    </Fragment>
  )
};
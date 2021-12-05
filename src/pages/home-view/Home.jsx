import React, { Fragment, useContext } from 'react';
import { AddNotificationContext } from '../../context';
import { ActionCard } from '../../components/cards/action-card';
import { LinkTo } from './styled';

export const Home = () => {
  const addNotificationContext = useContext(AddNotificationContext);
  const showNotification = addNotificationContext.addNotification;
  const fullNotification = addNotificationContext.fullNotification;

  return (
    <Fragment>
      <ActionCard type='notification' title="Next Shift!!!" day="Tomorrow Dec 5" time="5:00 AM - 3:00 PM" location="CFC" />
      <LinkTo to="first-contact">
        <ActionCard />
      </LinkTo>
      {showNotification ? <ActionCard type='notification' title={fullNotification.addTitle} day={fullNotification.addDay} time={fullNotification.addTime} location={fullNotification.addLocation}/> : ''}
    </Fragment>
  )
};
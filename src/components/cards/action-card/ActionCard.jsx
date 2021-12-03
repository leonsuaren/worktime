import React, { Fragment, useState } from 'react';
import { StyledActionCard, NotificationContent, FirstContactContent, Title, Description, Day, Time, Location } from './styled';
import { StyledAiOutlineCalendar, StyledAiOutlineCopy } from '../../../global';

const Notification = () => {
  return (
    <Fragment>
      <NotificationContent>
        <Title>Next Shift</Title>
        <Day>Tomorrow Dec 2</Day>
        <Time>5:00 AM - 3:00 PM</Time>
        <Location>CFC</Location>
      </NotificationContent>
      <StyledAiOutlineCalendar />
    </Fragment>
  )
};

const FirstContact = () => {
  return (
    <Fragment>
      <FirstContactContent>
        <Title>First Contact</Title>
        <Description>Vogliamo sentire da te.</Description>
      </FirstContactContent>
      <StyledAiOutlineCopy />
    </Fragment>
  )
};

export const ActionCard = () => {
  const [type, setType] = useState('FirstContact');

  return (
    <Fragment>
      <StyledActionCard>
        {
          type === 'notification' ? <Notification /> : <FirstContact />
        }
      </StyledActionCard>
    </Fragment>
  )
};
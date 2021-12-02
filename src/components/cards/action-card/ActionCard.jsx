import React, { Fragment, useState } from 'react';
import { StyledActionCard, NotificationContent, SurveyContent, Title, Description, Day, Time, Location } from './styled';
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

const Survey = () => {
  return (
    <Fragment>
      <SurveyContent>
        <Title>Survey</Title>
        <Description>Noi abbiamo dalle domande.</Description>
      </SurveyContent>
      <StyledAiOutlineCopy />
    </Fragment>
  )
};

export const ActionCard = () => {
  const [type, setType] = useState('survey');

  return (
    <Fragment>
      <StyledActionCard>
        {
          type === 'notification' ? <Notification /> : <Survey />
        }
      </StyledActionCard>
    </Fragment>
  )
};
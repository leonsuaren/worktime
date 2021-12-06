import React, { Fragment } from 'react';
import {
  StyledActionCard, NotificationContent, FirstContactContent, Title, Description, Day, Time, Location,
  TitleInput, DayInput, TimeInput, LocationInput
} from './styled';
import { StyledAiOutlineCalendar, StyledAiOutlineCopy } from '../../../global';

const Notification = ({ title, day, time, location }) => {
  return (
    <Fragment>
      <NotificationContent>
        <Title>{title}</Title>
        <Day>{day}</Day>
        <Time>{time}</Time>
        <Location>{location}</Location>
      </NotificationContent>
      <StyledAiOutlineCalendar />
    </Fragment>
  )
};

const FirstContact = ({ title, description }) => {
  return (
    <Fragment>
      <FirstContactContent>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
      </FirstContactContent>
      <StyledAiOutlineCopy />
    </Fragment>
  )
};

export const ActionCard = ({ type, title, day, time, location, description }) => {

  return (
    <Fragment>
      <StyledActionCard>
        {
          type === 'notification' ? <Notification title={title} day={day} time={time} location={location} /> : <FirstContact title={title} description={description}/>
        }
      </StyledActionCard>
    </Fragment>
  )
};

export const ActionCardInput = ({ title, day, time, location }) => {
  return (
    <Fragment>
      <StyledActionCard>
        <NotificationContent>
          <TitleInput type="text" name="title" value={title} disabled/>
          <DayInput type="text" name="day" value={day} disabled/>
          <TimeInput type="text" name="time" value={time} disabled/>
          <LocationInput type="text" name="location" value={location} disabled/>
        </NotificationContent>
        <StyledAiOutlineCalendar />
      </StyledActionCard>
    </Fragment>
  )
};
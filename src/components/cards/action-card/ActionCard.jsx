import React, { Fragment, useState, useEffect } from 'react';

import { Skeleton } from '../../skeleton';

import anime from 'animejs';

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
        <Title>{title}</Title>
        <Description>{description}</Description>
      </FirstContactContent>
      <StyledAiOutlineCopy />
    </Fragment>
  )
};

export const ActionCard = ({ type, title, day, time, location, description, addSkeleton }) => {
  const [skeleton, setSkeleton] = useState(true);
  const skeletonTime = () => {
    setTimeout(() => { setSkeleton(false) }, 2000);
  }

  useEffect(() => {
    skeletonTime();
  }, [skeleton]);

  useEffect(() => {
    anime({
      targets: '#actionCardAnimation',
      opacity: 1,
      duration: 1500,
      easing: 'easeInQuad'
    });
  }, []);

  return (
    <Fragment>
    {skeleton && addSkeleton ? <Skeleton fullSize={type === 'notification' ? true : false}/> :
      <StyledActionCard>
      {
        type === 'notification' ? <Notification title={title} day={day} time={time} location={location} /> : <FirstContact title={title} description={description} />
      }
      </StyledActionCard>
    }
    </Fragment>
  )
};

export const ActionCardInput = ({ title, day, time, location, addSkeleton }) => {
  const [skeleton, setSkeleton] = useState(true);
  const skeletonTime = () => {
    setTimeout(() => { setSkeleton(false) }, 2000);
  }

  useEffect(() => {
    skeletonTime();
  }, [skeleton]);

  return (
    <Fragment>
    {skeleton && addSkeleton ? <Skeleton fullSize /> : 
      <StyledActionCard>
        <NotificationContent>
          <TitleInput type="text" name="title" value={title} disabled />
          <DayInput type="text" name="day" value={day} disabled />
          <TimeInput type="text" name="time" value={time} disabled />
          <LocationInput type="text" name="location" value={location} disabled />
        </NotificationContent>
        <StyledAiOutlineCalendar />
      </StyledActionCard>
    }
    </Fragment>
  )
};
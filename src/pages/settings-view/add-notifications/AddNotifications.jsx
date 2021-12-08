import React, { Fragment, useState, useContext, useEffect } from 'react';
import { AddNotificationContext } from '../../../context'
import { StyledActionCardInput, NotificationContentInput, Input, Label } from './styled';
import { Hr } from '../../../global'
import { ActionCardInput } from '../../../components/cards/action-card';
import { ActionButton } from '../../../components/button/action-button';
import { Skeleton } from '../../../components/skeleton';

export const AddNotifications = ({ addSkeleton }) => {
  const addNotificationContext = useContext(AddNotificationContext);

  const [addTitle, setAddTitle] = useState('Add a Title!!');
  const [addDay, setAddDay] = useState('Add a Day!!!');
  const [addTime, setAddTime] = useState('Add a Time!!!');
  const [addLocation, setAddLocation] = useState('Add a Location!!!');

  const handleOnAddTitle = (event) => {
    setAddTitle(event.target.value);
  };

  const handleOnAddDay = (event) => {
    setAddDay(event.target.value);
  };

  const handleOnAddTime = (event) => {
    setAddTime(event.target.value)
  };

  const handleOnAddLocation = (event) => {
    setAddLocation(event.target.value);
  };

  const handleOnConfirmNotification = () => {
    addNotificationContext.handleOnAddNotification({ addTitle, addDay, addTime, addLocation, });
  };

  const [skeleton, setSkeleton] = useState(true);
  const skeletonTime = () => {
    setTimeout(() => { setSkeleton(false) }, 2000);
  }

  useEffect(() => {
    skeletonTime();
  }, [skeleton]);

  return (
    <Fragment>
      <Hr />
      {skeleton ? <Skeleton fullSize/> :
        <StyledActionCardInput>
          <h3>Add a Notification</h3>
          <NotificationContentInput>
            <Label>Title:
            <Input name="title" type="text" value={addTitle} onChange={handleOnAddTitle} />
            </Label>
            <Label>Day:
            <Input name="day" type="date" value={addDay} onChange={handleOnAddDay} />
            </Label>
            <Label>Hour:
            <Input name="time" type="time" value={addTime} onChange={handleOnAddTime} />
            </Label>
            <Label>Location:
          <Input name="location" type="text" value={addLocation} onChange={handleOnAddLocation} />
            </Label>
          </NotificationContentInput>
          <ActionButton text="Confirm" onClick={handleOnConfirmNotification} />
        </StyledActionCardInput>
      }
      <Hr />
      <ActionCardInput addSkeleton type='notification' title={addTitle} day={addDay} time={addTime} location={addLocation} />
      <Hr />
    </Fragment>
  )
};
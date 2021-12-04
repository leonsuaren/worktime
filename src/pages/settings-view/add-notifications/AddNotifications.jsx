import React, { Fragment, useState } from 'react';
import { StyledActionCardInput, NotificationContentInput, Input, Label } from './styled';
import { Hr } from '../../../global'
import { ActionCardInput } from '../../../components/cards/action-card';

export const AddNotifications = () => {
  const [ addTitle, setAddTitle ] = useState('Add a Title!!');
  const [ addDay, setAddDay ] = useState('Add a Day!!!');
  const [ addTime, setAddTime ] = useState('Add a Time!!!');
  const [ addLocation, setAddLocation ] = useState('Add a Location!!!');

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

  return (
    <Fragment>
      <Hr />
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
        <button>Confirm</button>
      </StyledActionCardInput>
      <Hr />
      <ActionCardInput type='notification' title={addTitle} day={addDay} time={addTime} location={addLocation}/>
    </Fragment>
  )
};
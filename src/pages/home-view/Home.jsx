import React, { Fragment } from 'react';
import { ActionCard } from '../../components/cards/action-card';
import { LinkTo } from './styled';

export const Home = () => {
  return (
    <Fragment>
      <ActionCard type='notification' title="Next Shift!!!" day="Tomorrow Dec 5" time="5:00 AM - 3:00 PM" location="CFC"/>
      <LinkTo to="first-contact">
        <ActionCard />
      </LinkTo>
    </Fragment>
  )
};
import React, { Fragment } from 'react';
import { ActionCard } from '../../components/cards/action-card';
import { LinkTo } from './styled';

export const Home = () => {
  return (
    <Fragment>
      <ActionCard type='notification' />
      <LinkTo to="first-contact">
        <ActionCard />
      </LinkTo>
    </Fragment>
  )
};
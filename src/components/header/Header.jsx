import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, HeadTitle, HeadTime, HeadAvatar, DefaultContent } from './index';
import { Avatar } from './../avatar';
import { DateTime } from 'luxon';

export const Header = ({ page }) => {
  const dt = DateTime.now();
  let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Fragment>
      <Head data-test="header-component">
        <HeadTime>{hour}</HeadTime>
        <HeadTitle data-test="title-component">{page ? page : 'Distribution Center'}</HeadTitle>
        <HeadAvatar>
          <Avatar><DefaultContent>RS</DefaultContent></Avatar>
        </HeadAvatar>
      </Head>
    </Fragment>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired
};

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, HeadTitle, HeadTime, HeadAvatar, DefaultContent, LinkTo } from './index';
import { Avatar } from './../avatar';
import { DateTime } from 'luxon';
import { StyledFillSetting } from '../../global';

export const Header = ({ page }) => {
  const dt = DateTime.now();
  let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Fragment>
      <Head data-test="header-component">
        <HeadTime>{hour}</HeadTime>
        <HeadTitle data-test="title-component" isActive>{page ? page : 'Distribution Center'}</HeadTitle>
        <HeadAvatar>
          <LinkTo to="/settings">
            <StyledFillSetting/>
          </LinkTo>
          <Avatar><DefaultContent>RS</DefaultContent></Avatar>
        </HeadAvatar>
      </Head>
    </Fragment>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired
};

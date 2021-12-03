import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, HeadTitle, HeadTime, HeadAvatar, DefaultContent, LinkTo, HeaderWrapper } from './index';
import { Avatar } from './../avatar';
import { DateTime } from 'luxon';
import { StyledFillSetting } from '../../global';
import { ResponsiveContainer } from '../../global/PageLayout';

export const Header = ({ page }) => {
  const dt = DateTime.now();
  let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Fragment>
      <Head data-test="header-component">
        <ResponsiveContainer>
          <HeaderWrapper>
            <HeadTime>{hour}</HeadTime>
            <HeadTitle data-test="title-component" isActive>{page ? page : 'Distribution Center'}</HeadTitle>
            <HeadAvatar>
              <LinkTo to="/settings">
                <StyledFillSetting />
              </LinkTo>
              <Avatar><DefaultContent>RS</DefaultContent></Avatar>
            </HeadAvatar>
          </HeaderWrapper>
        </ResponsiveContainer>
      </Head>
    </Fragment>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired
};

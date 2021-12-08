import React, { Fragment } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Head, HeadTitle, HeadTime, HeadAvatar, DefaultContent, LinkTo, HeaderWrapper } from './index';
import { Avatar } from './../avatar';
import { DateTime } from 'luxon';
import { StyledFillSetting, StyledAiOutlineLeft } from '../../global';
import { ResponsiveContainer } from '../../global/PageLayout';

export const Header = ({ page }) => {
  const history = useNavigate();
  const { pathname } = useLocation();
  let showNavigationBar = false;
  const dt = DateTime.now();
  let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);
  const userProvilege = localStorage.getItem('privilege');

  const onGoBack = () => {
    history(-1);
  };

  if (pathname === "/settings/add-notifications") {
    showNavigationBar = true
  } else if (pathname === "/first-contact") {
    showNavigationBar = true
  } else if (pathname === "/settings/change-language") {
    showNavigationBar = true
  } else if (pathname === "/settings") {
    showNavigationBar = true
  }

  return (
    <Fragment>
      <Head data-test="header-component">
        <ResponsiveContainer>
          <HeaderWrapper>
            <HeadTime>
              {hour}
              {
                showNavigationBar ? <StyledAiOutlineLeft onClick={onGoBack} /> : ''
              }
            </HeadTime>
            <HeadTitle data-test="title-component" isActive>{page ? page : 'Distribution Center'}</HeadTitle>
            <HeadAvatar>
              {
                userProvilege === 'Admin' ?
                  <LinkTo to="/settings">
                    <StyledFillSetting />
                  </LinkTo> :
                  <div></div>
              }
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

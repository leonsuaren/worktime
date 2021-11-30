import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, HeadTitle, HeadTime } from './index';
import { DateTime } from 'luxon';

export const Header = ({ page }) => {
  const dt = DateTime.now();
  let hour = dt.toLocaleString(DateTime.TIME_SIMPLE);
  console.log(dt.toLocaleString(DateTime.TIME_SIMPLE))

  return(
    <Fragment>
      <Head data-test="header-component">
        <HeadTime>{ hour }</HeadTime>
        <HeadTitle data-test="title-component">{ page ? page : 'Distribution Center' }</HeadTitle>
        <div></div>
      </Head>
    </Fragment>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired
};

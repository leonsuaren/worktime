import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, HeadTitle } from './index';

export const Header = ({ brand }) => {
  return(
    <Fragment>
      <Head data-test="header-component">
        <HeadTitle data-test="title-component">{ brand ? brand : 'Distribution Center' }</HeadTitle>
      </Head>
    </Fragment>
  );
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

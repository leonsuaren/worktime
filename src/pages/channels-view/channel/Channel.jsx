import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { DataBaseContext } from './../../../context/';
import { Hr } from '../../../global';
import { Title } from './styled';

export const Channel = () => {
  const dataBaseContext = useContext(DataBaseContext);
  const channelTitle = dataBaseContext.oneChannel

  return (
    <Fragment>
      <Hr />
        <Title>{channelTitle.channel_title}</Title>
      <Hr />
    </Fragment>
  )
};
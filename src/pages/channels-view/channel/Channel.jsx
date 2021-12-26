import React, { Fragment, useContext, useEffect } from 'react';
import { DataBaseContext } from './../../../context/';

export const Channel = () => {
  const dataBaseContext = useContext(DataBaseContext);

  useEffect(() => {
    
  }, []);
  console.log(dataBaseContext.oneChannel);
  return(
    <Fragment>
      <h1>{'dataBaseContext.oneChannel.channel_title'}</h1>
    </Fragment>
  )
};
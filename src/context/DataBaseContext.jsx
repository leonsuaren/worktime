import React, { createContext, useState } from 'react';
import axios from 'axios';

export const DataBaseContext = createContext();
export const DataBaseContextProvider = ({ children }) => {

const [ oneChannel, setOneChannel ] = useState();
const [ channelId, setChannelId ] = useState();

const fetchOneChannel = ({oneChannel, _id}) => {
  setOneChannel(oneChannel)
  setChannelId(_id)
};

  return(
    <DataBaseContext.Provider value={ { oneChannel, channelId, fetchOneChannel } }>
      { children }
    </DataBaseContext.Provider>
  );
};
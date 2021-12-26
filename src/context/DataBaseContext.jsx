import React, { createContext, useState } from 'react';
import axios from 'axios';

export const DataBaseContext = createContext();
export const DataBaseContextProvider = ({ children }) => {

const [ oneChannel, setOneChannel ] = useState();

const fetchOneChannel = ({channelId}) => {
  axios.get(`http://localhost:8000/channels/:${channelId}`).then((response) => {
      setOneChannel(response.data);
  });
};

  return(
    <DataBaseContext.Provider value={ { oneChannel, fetchOneChannel } }>
      { children }
    </DataBaseContext.Provider>
  );
};
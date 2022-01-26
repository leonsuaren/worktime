import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataBaseContext = createContext();
export const DataBaseContextProvider = ({ children }) => {

const [ oneChannel, setOneChannel ] = useState();
const [channels, setChannels] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/channels').then((response) => {
    setChannels(response.data.channels);
  });
}, []);

const fetchOneChannel = ({oneChannel}) => {
  setOneChannel(oneChannel);
};
  return(
    <DataBaseContext.Provider value={ { channels, oneChannel, fetchOneChannel } }>
      { children }
    </DataBaseContext.Provider>
  );
};
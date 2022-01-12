import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataBaseContext = createContext();
export const DataBaseContextProvider = ({ children }) => {

const [ oneChannel, setOneChannel ] = useState();
const [ channelId, setChannelId ] = useState();

const [channels, setChannels] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/channels').then((response) => {
    setChannels(response.data.channels);
  });
}, []);

const fetchOneChannel = ({oneChannel, _id}) => {
  setOneChannel(oneChannel);
  setChannelId(_id);
};

  return(
    <DataBaseContext.Provider value={ { channels, oneChannel, channelId, fetchOneChannel } }>
      { children }
    </DataBaseContext.Provider>
  );
};
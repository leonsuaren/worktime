import React, { createContext, useState } from 'react';

export const AddNotificationContext = createContext();

export const AddNotificationContextProvider = ({ children }) => {
  const [ addNotification, setAddNotification ] = useState(false);
  const [ fullNotification, setFullNotification ] = useState();

  const handleOnAddNotification = (notification) => {
    setAddNotification(true);
    setFullNotification(notification)
  };

  return(
    <AddNotificationContext.Provider value={{ handleOnAddNotification, addNotification, fullNotification }}>
      { children }
    </AddNotificationContext.Provider>
  )
};
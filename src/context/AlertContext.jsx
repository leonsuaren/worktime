import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [ showAlert, setShowAlert ] = useState(false);

  const onShowAlert = () => {
    setShowAlert(true);
  };
  
  const onHideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000)
  };

  return(
    <AlertContext.Provider value={{ onShowAlert, onHideAlert, showAlert }}>
      { children }
    </AlertContext.Provider>
  )
};
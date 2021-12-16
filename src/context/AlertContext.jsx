import React, { createContext, useState } from 'react';
import { Alert } from '../components/alert';

export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [ showAlert, setShowAlert ] = useState(false);

  const onShowAlert = () => {
    setShowAlert(true)
  };

  return(
    <AlertContext.Provider value={{ onShowAlert, showAlert }}>
      { children }
    </AlertContext.Provider>
  )
};
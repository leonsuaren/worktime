import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const userProvilege = localStorage.setItem('privilege', 'Admon');

  return (
    <UserContext.Provider value={{ userProvilege }}>
      {children}
    </UserContext.Provider>
  )
};
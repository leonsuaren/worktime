import React, { createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const userProvilege = localStorage.setItem('privilege', 'Operator');

  return (
    <UserContext.Provider value={{ userProvilege }}>
      {children}
    </UserContext.Provider>
  )
};
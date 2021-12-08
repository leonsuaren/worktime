import React, { createContext } from 'react';
import { LogIn } from '../pages/log-in';
import { Users } from '../data-base';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {

  const userProvilege = localStorage.setItem('privilege', 'Supervisor');

  return (
    <UserContext.Provider value={{ userProvilege, LogIn, Users }}>
      {children}
    </UserContext.Provider>
  )
};
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PrimaryTheme from './PrimaryTheme';
import SecondaryTheme from './SecondaryTheme';


export const Theme = ({ children }) => {
  const Provider = ThemeProvider;
  const [theme, setTheme] = useState(PrimaryTheme);

  return (
    <Provider theme={{
      ...theme, setTheme: () => {
        setTheme(s => s.id === 'sunset' ? PrimaryTheme : SecondaryTheme);
      }
    }}>
      {children}
    </Provider>
  );

};
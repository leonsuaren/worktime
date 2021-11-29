import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PrimaryTheme from './PrimaryTheme';
import SecondaryTheme from './SecondaryTheme';


export const Theme = ({ children }) => {
  const Provider = ThemeProvider;

  const [theme, setTheme] = useState(PrimaryTheme);
  const handleOnClick = () => {
    setTheme(s => s.id === 'sunset' ? PrimaryTheme : SecondaryTheme);
  }

  return (
    <Provider theme={theme}>
    {children}
    <button onClick={handleOnClick}>hola</button>
    </Provider>
  );

};
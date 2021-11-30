import React, { Fragment, useState, useContext } from 'react';
import { ToggleWraper, Notch } from './styled';
import { ThemeContext } from 'styled-components';

export const Toggle = () => {
  const [active, setActive] = useState(false);
  const {id, setTheme} = useContext(ThemeContext)

  const handleOnChangeTheme = () => {
    setActive(s => !s);
    setTheme(s => id === 'down' ? 'sunset' : 'down')
  };

  return(
    <Fragment>
        <ToggleWraper id={id} onClick={handleOnChangeTheme}>
          <Notch isActive={active}/>
        </ToggleWraper>
    </Fragment>
  )
};
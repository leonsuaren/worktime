import React, { Fragment, useState, useContext } from 'react';
import { ToggleWrapper, Notch } from './styled';
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
        <ToggleWrapper id={id} onClick={handleOnChangeTheme}>
          <Notch isActive={active}/>
        </ToggleWrapper>
    </Fragment>
  )
};
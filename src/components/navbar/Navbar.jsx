import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NavigationBar } from './index';
import { Button } from '../button';
import {
  StyledBihome,
  StyledAiOutlineSchedule,
  StyledAiOutlineDesktop,
  StyledAiOutlineNotification,
  StyledAiOutlineMore,
  LinkTo
} from './index';

export const Navbar = () => {
  const { id, setTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    setTheme(s => id === 'down' ? 'sunset' : 'down')
  }

  return (
    <NavigationBar data-test="navbar-component">
      <LinkTo to="/">
        <Button icon={<StyledBihome />} description="Home"></Button>
      </LinkTo>
      <LinkTo to="/schedule">
        <Button icon={<StyledAiOutlineSchedule />} description="Schedule"></Button>
      </LinkTo>
      <LinkTo to="/channels">
        <Button icon={<StyledAiOutlineDesktop />} description="Channels"></Button>
      </LinkTo>
      <LinkTo to="/notifications">
        <Button icon={<StyledAiOutlineNotification />} description="Notifications"></Button>
      </LinkTo>
      <LinkTo to="/more">
        <Button icon={<StyledAiOutlineMore />} description="More"></Button>
      </LinkTo>
    </NavigationBar>
  );
};

//      <button id={id} onClick={handleOnClick}>change theme</button>

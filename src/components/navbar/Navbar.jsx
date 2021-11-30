import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  const handleOnClick = () => {
    setTheme(s => id === 'down' ? 'sunset' : 'down')
  }

  return (
    <NavigationBar data-test="navbar-component">
      <LinkTo to="/" isActive={pathname === "/"}>
        <Button icon={<StyledBihome />} description="Home"></Button>
      </LinkTo>
      <LinkTo to="/schedule" isActive={pathname === "/schedule"}>
        <Button icon={<StyledAiOutlineSchedule />} description="Schedule"></Button>
      </LinkTo>
      <LinkTo to="/channels" isActive={pathname === "/channels"}>
        <Button icon={<StyledAiOutlineDesktop />} description="Channels"></Button>
      </LinkTo>
      <LinkTo to="/notifications" isActive={pathname === "/notifications"}>
        <Button icon={<StyledAiOutlineNotification />} description="Notifications"></Button>
      </LinkTo>
      <LinkTo to="/more" isActive={pathname === "/more"}>
        <Button icon={<StyledAiOutlineMore />} description="More"></Button>
      </LinkTo>
    </NavigationBar>
  );
};

//      <button id={id} onClick={handleOnClick}>change theme</button>

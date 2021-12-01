import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationBar, NavigationWrapper, LinkTo } from './index';
import { Button } from '../button';
import {
  StyledBihome,
  StyledAiOutlineSchedule,
  StyledAiOutlineDesktop,
  StyledAiOutlineNotification,
  StyledAiOutlineMore
} from '../../global';

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <NavigationWrapper isActive={pathname === "/settings/add-notifications"}>
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
    </NavigationWrapper>
  );
};
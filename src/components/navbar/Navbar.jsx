import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation, NavigationBar, NavigationWrapper, LinkTo } from './index';
import { Button } from '../button';
import {
  StyledBihome,
  StyledAiOutlineSchedule,
  StyledAiOutlineDesktop,
  StyledAiOutlineNotification,
  StyledAiOutlineMore
} from '../../global';
import { ResponsiveContainer } from '../../global/PageLayout';

export const Navbar = () => {
  const { pathname } = useLocation();
  let showNavigationBar = false;

  if(pathname === "/settings/add-notifications") {
    showNavigationBar = true
  } else if (pathname === "/first-contact") {
    showNavigationBar = true
  }

  return (
    <Navigation>
      <ResponsiveContainer>
        <NavigationWrapper isActive={showNavigationBar}>
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
      </ResponsiveContainer>
    </Navigation>
  );
};
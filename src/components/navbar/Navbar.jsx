import React, { useContext } from 'react';

import { LanguageContext } from '../../context';

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
  const languageContext = useContext(LanguageContext);

  const { pathname } = useLocation();
  let showNavigationBar = false;

  if(pathname === "/more/add-notifications") {
    showNavigationBar = true
  } else if (pathname === "/first-contact") {
    showNavigationBar = true
  } else if (pathname === "/settings/change-language") {
    showNavigationBar = true
  } else if (pathname === "/settings") {
    showNavigationBar = true
  } 

  return (
    <Navigation>
      <ResponsiveContainer>
        <NavigationWrapper isActive={showNavigationBar}>
          <NavigationBar data-test="navbar-component">
            <LinkTo to="/" isActive={pathname === "/"}>
              <Button icon={<StyledBihome />} description={languageContext.language.home}></Button>
            </LinkTo>
            <LinkTo to="/schedule" isActive={pathname === "/schedule"}>
              <Button icon={<StyledAiOutlineSchedule />} description={languageContext.language.schedule}></Button>
            </LinkTo>
            <LinkTo to="/channels" isActive={pathname === "/channels"}>
              <Button icon={<StyledAiOutlineDesktop />} description={languageContext.language.channels}></Button>
            </LinkTo>
            <LinkTo to="/notifications" isActive={pathname === "/notifications"}>
              <Button icon={<StyledAiOutlineNotification />} description={languageContext.language.notifications}></Button>
            </LinkTo>
            <LinkTo to="/more" isActive={pathname === "/more"}>
              <Button icon={<StyledAiOutlineMore />} description={languageContext.language.more}></Button>
            </LinkTo>
          </NavigationBar>
        </NavigationWrapper>
      </ResponsiveContainer>
    </Navigation>
  );
};
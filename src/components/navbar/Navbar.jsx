import React from 'react';
import { NavigationBar } from './index';
import { Button } from '../button';
import { 
  StyledBihome, 
  StyledAiOutlineSchedule, 
  StyledAiOutlineDesktop, 
  StyledAiOutlineNotification, 
  StyledAiOutlineMore 
} from './index';

export const Navbar = () => {
  return(
    <NavigationBar data-test="navbar-component" >
      <Button icon={<StyledBihome />} description="Home" />
      <Button icon={<StyledAiOutlineSchedule />} description="Schedule" />
      <Button icon={<StyledAiOutlineDesktop />} description="Channels" />
      <Button icon={<StyledAiOutlineNotification/>} description="Notifications" />
      <Button icon={<StyledAiOutlineMore />} description="More" />
    </NavigationBar>
  );
};
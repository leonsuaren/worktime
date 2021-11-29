import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
  const {id, setTheme} = useContext(ThemeContext);

  const handleOnClick = () => {
    setTheme(s => id === 'down' ? 'sunset' : 'down')
  }

  return(
    <NavigationBar data-test="navbar-component">
      <Button icon={<StyledBihome />} description="Home"></Button>
      <Button icon={<StyledAiOutlineSchedule />} description="Schedule" />
      <Button icon={<StyledAiOutlineDesktop />} description="Channels" />
      <Button icon={<StyledAiOutlineNotification/>} description="Notifications" />
      <Button icon={<StyledAiOutlineMore />} description="More" />
    </NavigationBar>
  );
};

//      <button id={id} onClick={handleOnClick}>change theme</button>

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './../components/header';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
`;

export const PageLayout = ({ children }) => {
  const {pathname} = useLocation();
  let activePage;

  if(pathname === '/') {
    activePage = 'HOME';
  } else if(pathname === '/schedule') {
    activePage = 'SCHEDULE'
  } else if(pathname === '/notifications') {
    activePage = 'NOTIFICATIONS'
  } else if(pathname === '/channels') {
    activePage = 'CHANNELS'
  } else if(pathname === '/more') {
    activePage = 'MORE'
  }

  return (
    <Layout>
      <Header page={activePage} />
      {children}
    </Layout>
  );
};
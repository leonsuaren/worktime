import React, { useContext } from 'react';
import { LanguageContext } from '../context';
import { useLocation } from 'react-router-dom';
import { Header } from './../components/header';
import { Navbar } from './../components/navbar';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-rows: ${p => p.headerLayout ? '1fr 1fr auto' : '1fr auto'};
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const PageLayout = ({ children }) => {
  const languageContext = useContext(LanguageContext);
  const { pathname } = useLocation();
  let activePage;
  let headerLayout = false;

  if (pathname === '/') {
    activePage = `${languageContext.language.home}`;
  } else if (pathname === '/first-contact') {
    activePage = 'FIRST CONTACT';
    headerLayout = false;
  } else if (pathname === '/schedule') {
    activePage = `${languageContext.language.schedule}`;
  } else if (pathname === '/notifications') {
    activePage = `${languageContext.language.notifications}`;
  } else if (pathname === '/channels') {
    activePage = `${languageContext.language.channels}`;
  } else if (pathname === '/more') {
    activePage = `${languageContext.language.more}`;
  } else if (pathname === '/settings') {
    activePage = 'SETTINGS'
  } else if (pathname === '/settings/add-notifications') {
    activePage = 'SETTINGS';
    headerLayout = false
  } else if (pathname === '/settings/change-language') {
    activePage = 'LANGUAGE';
    headerLayout = false
  }

  return (
    <Layout headerLayout={headerLayout}>
      <Header page={activePage} />
      <Navbar />
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </Layout>
  );
};
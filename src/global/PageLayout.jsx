import React from 'react';
import { Header } from './../components/header';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
`;

export const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Header page="HOME" />
      {children}
    </Layout>
  );
};
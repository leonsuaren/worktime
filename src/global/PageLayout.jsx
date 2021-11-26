import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
`;

export const PageLayout = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};
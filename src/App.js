import './App.css';
import { Header } from './components/header'
import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';
import React, { Fragment } from 'react';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <PageLayout>
        <Header brand="CCDO" />
        <Navbar />
      </PageLayout>
    </Fragment>
  );
}

export default App;

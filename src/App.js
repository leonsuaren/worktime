import React, { Fragment } from 'react';
import { Theme } from './global/Theme';
import { Header } from './components/header';
import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Fragment>
      <Theme theme>
        <GlobalStyle />
        <PageLayout>
          <Header brand="CCDO" />
          <Navbar />
        </PageLayout>
      </Theme>
    </Fragment>
  );
}

export default App;

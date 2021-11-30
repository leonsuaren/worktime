import React, { Fragment } from 'react';
import { Theme } from './global/Theme';
import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Fragment>
      <Theme theme>
        <GlobalStyle />
        <PageLayout>
          <Navbar />
        </PageLayout>
      </Theme>
    </Fragment>
  );
}

export default App;

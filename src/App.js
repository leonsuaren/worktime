import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme } from './global/Theme';
import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';
import { Home } from './pages/home-view';
import { Schedule } from './pages/schedule-view';
import { Channels } from './pages/channels-view';
import { Notifications } from './pages/notifications-view';
import { AddNotifications } from './pages/settings-view/add-notifications';
import { More } from './pages/more-view';
import { Settings } from './pages/settings-view';

function App() {
  return (
    <Fragment>
      <Theme theme>
        <GlobalStyle />
        <Router>
          <PageLayout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='schedule' element={<Schedule />} />
              <Route path='channels' element={<Channels />} />
              <Route path='notifications' element={<Notifications />} />
              <Route path='more' element={<More />} />
              <Route path='settings' element={<Settings />}/>
              <Route path='settings/add-notifications' element={<AddNotifications />} />
            </Routes>
          </PageLayout>
        </Router>
      </Theme>
    </Fragment>
  );
}

export default App;

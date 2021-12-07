import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Theme } from './global/Theme';
import { AddNotificationContextProvider } from './context/AddNotificationContext';
import { LanguageContextProvider } from './context/LanguageContext';
import { UserContextProvider } from './context/UserContext';

import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';

import { Home } from './pages/home-view';
import { Schedule } from './pages/schedule-view';
import { Channels } from './pages/channels-view';
import { Notifications } from './pages/notifications-view';
import { AddNotifications } from './pages/settings-view/add-notifications';
import { More } from './pages/more-view';
import { Settings } from './pages/settings-view';
import { FirstContact } from './pages/home-view/first-contact-view';
import { ChangeLanguage } from './pages/settings-view/change-language';

function App() {
  return (
    <Fragment>
      <UserContextProvider>
        <Theme theme>
          <GlobalStyle />
          <Router>
            <LanguageContextProvider>
              <PageLayout>
                <AddNotificationContextProvider>
                  <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='schedule' element={<Schedule />} />
                    <Route path='channels' element={<Channels />} />
                    <Route path='notifications' element={<Notifications />} />
                    <Route path='more' element={<More />} />
                    <Route path='settings' element={<Settings />} />
                    <Route path='more/add-notifications' element={<AddNotifications />} />
                    <Route path='first-contact' element={<FirstContact />} />
                    <Route path='settings/change-language' element={<ChangeLanguage />} />
                  </Routes>
                </AddNotificationContextProvider>
              </PageLayout>
            </LanguageContextProvider>
          </Router>
        </Theme>
      </UserContextProvider>
    </Fragment>
  );
}

export default App;

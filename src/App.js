import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Theme } from './global/Theme';
import { AlertContextProvider } from './context';
import { UserContextProvider } from './context/UserContext';
import { AddNotificationContextProvider } from './context/AddNotificationContext';
import { LanguageContextProvider } from './context/LanguageContext';
import { DataBaseContextProvider } from './context';

import { PageLayout } from './global';
import { GlobalStyle } from './global/GlobalStyles';

import { Home } from './pages/home-view';
import { LogIn } from './pages/log-in';
import { Schedule } from './pages/schedule-view';
import { Channels } from './pages/channels-view';
import { Notifications } from './pages/notifications-view';
import { AddNotifications } from './pages/settings-view/add-notifications';
import { More } from './pages/more-view';
import { Settings } from './pages/settings-view';
import { FirstContact } from './pages/home-view/first-contact-view';
import { ChangeLanguage } from './pages/settings-view/change-language';
import { NotFound } from './pages/not-found';
import { Loading } from './pages/loading';
import { Suggestions } from './pages/more-view/suggestions';
import { Channel } from './pages/channels-view/channel';
import { AddCard } from './pages/more-view/add-card';


function App() {
  return (
    <Fragment>
      <AlertContextProvider>
        <UserContextProvider>
          <DataBaseContextProvider>
            <Theme theme>
              <Router>
                <GlobalStyle />
                <LanguageContextProvider>
                  <PageLayout>
                    <AddNotificationContextProvider>
                      <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='schedule' element={<Schedule />} />
                        <Route path='channels' element={<Channels />} />
                        <Route path='channels/channel/:id' element={<Channel />} />
                        <Route path='notifications' element={<Notifications />} />
                        <Route path='more' element={<More />} />
                        <Route path='more/suggestions' element={<Suggestions />} />
                        <Route path='more/add-card' element={<AddCard/>} />
                        <Route path='settings' element={<Settings />} />
                        <Route path='settings/change-language' element={<ChangeLanguage />} />
                        <Route path='settings/add-notifications' element={<AddNotifications />} />
                        <Route path='first-contact' element={<FirstContact />} />
                        <Route path='*' element={<NotFound />} />
                      </Routes>
                    </AddNotificationContextProvider>
                  </PageLayout>
                </LanguageContextProvider>
              </Router>
            </Theme>
          </DataBaseContextProvider>
        </UserContextProvider>
      </AlertContextProvider>
    </Fragment>
  );
}

export default App;

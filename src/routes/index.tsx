import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import UserHome from '../pages/UserHome';
import ConfigurationPasswordPage from '../pages/ConfigurationPasswordPage';
import ConfigurationDeletePage from '../pages/ConfigurationDeletePage';
import ConfigurationNicknamePage from '../pages/ConfigurationNicknamePage';
import TokenProvider from '../contexts/TokenContext';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sobre" component={AboutPage} />
    <TokenProvider>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/userhome" component={UserHome} />
      <Route exact path="/Configuration-Password" component={ConfigurationPasswordPage} />
      <Route exact path="/Configuration-DeleteCont" component={ConfigurationDeletePage} />
      <Route exact path="/Configuration-NickName" component={ConfigurationNicknamePage} />
    </TokenProvider>

  </Switch>
);

export default Routes;

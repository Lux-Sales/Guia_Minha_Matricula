import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import UserHome from '../pages/UserHome';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sobre" component={AboutPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/userhome" component={UserHome} />
  </Switch>
);

export default Routes;

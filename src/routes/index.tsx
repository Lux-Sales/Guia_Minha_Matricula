import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sobre" component={AboutPage} />
  </Switch>
);

export default Routes;

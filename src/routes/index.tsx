import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import UserHome from '../pages/UserHome';
import { login, User } from '../service/UserService';

const Routes: React.FC = () => {
  const [userID, setUserID] = useState(() => localStorage.getItem('@user-id') || '');

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sobre" component={AboutPage} />
      <Route exact path="/login" component={() => (<LoginPage setUserID={setUserID} />)} />
      <Route exact path="/userhome" component={() => (<UserHome userID={userID} />)} />
    </Switch>
  );
};

export default Routes;

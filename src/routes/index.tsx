import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import UserHome from '../pages/UserHome';
import ConfigurationPasswordPage from '../pages/ConfigurationPasswordPage';
import ConfigurationDeletePage from '../pages/ConfigurationDeletePage';
import ConfigurationNicknamePage from '../pages/ConfigurationNicknamePage';
import { TokenContext } from '../contexts/TokenContext';

const Routes: React.FC = () => {
  const { isUserLoggedIn } = useContext(TokenContext);

  return (
    <Switch>
      <>
        <Route exact path="/">
          {isUserLoggedIn ? <Redirect to="/userhome" /> : <HomePage />}
        </Route>
        <Route exact path="/sobre">
          {isUserLoggedIn ? <Redirect to="/userhome" /> : <AboutPage />}
        </Route>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/userhome">
          {isUserLoggedIn ? <UserHome /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/Configuration-Password" component={ConfigurationPasswordPage} />
        <Route exact path="/Configuration-DeleteCont" component={ConfigurationDeletePage} />
        <Route exact path="/Configuration-NickName" component={ConfigurationNicknamePage} />
      </>
    </Switch>
  );
};

export default Routes;

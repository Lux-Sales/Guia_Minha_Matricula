import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/global.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import './styles/Nav.css';
import './styles/Home.css';
import './styles/Menu.css';
import './styles/Settings.css';
import './styles/Leaderboard.css';
import './styles/About.css';

import Nav from './js/Nav.js';
import Home from './js/Home.js';
import Settings from './js/Settings.js';
import Leaderboard from './js/Leaderboard.js';
import About from './js/About.js';
import Menu from './js/Menu.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Menu />
      </div>
    </Router>
  );
}

export default App;

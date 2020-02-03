import React from 'react';
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
    <div className="App">
      <Nav />
      {/* <Home /> */}
      {/* <Settings /> */}
      <Leaderboard />
      {/* <About /> */}
      <Menu />
    </div>
  );
}

export default App;

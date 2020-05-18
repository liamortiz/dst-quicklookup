import React from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/Home';
import CharacterPage from './components/Characters';

import {BrowserRouter as Router, Route} from 'react-router-dom';

// CSS Sheets
import './App.scss';
import './mobile.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <div id = "wrapper">
          <Route path = "/home" component = {HomePage}/>
          <Route path = "/characters" component = {CharacterPage}/>
        </div>

      </div>
    </Router>
  );
}
export default App;

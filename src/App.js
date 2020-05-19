import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/Home';
import CharacterPage from './components/Characters';
import RecipePage from './components/Recipe';

import './App.scss';
import './mobile.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <div id = "wrapper">
          <Switch>
            <Route path = "/" exact component = {HomePage}/>
            <Route path = "/characters" exact component = {CharacterPage}/>
            <Route path = "/recipes" exact component = {RecipePage} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}
export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/Home';
import CharacterPage from './components/Characters';
import RecipePage from './components/Recipe';
import CraftingPage from './components/Crafting';

import './App.scss';
import './Mobile.scss';

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL + '/'}>
      <div className="App">
        <Navigation />

        <div id = "wrapper">
          <Switch>
            <Route path = {process.env.PUBLIC_URL + '/'} exact component = {HomePage}/>
            <Route path = "/characters" exact component = {CharacterPage}/>
            <Route path = "/recipes" exact component = {RecipePage} />
            <Route path = "/crafting/:filter?" exact component = {CraftingPage} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}
export default App;

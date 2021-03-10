import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/league/:id">
          <LeagueDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
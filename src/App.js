import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/toolbar/toolbar";
import ShowPage from "./pages/show/show-page";
import HomePage from "./pages/home/home-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Toolbar></Toolbar>
        <Switch>
          <Route path="/show/:showId">
            <ShowPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

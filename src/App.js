import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/toolbar/toolbar";
import ShowPage from "./pages/show/show-page";
import HomePage from "./pages/home/home-page";
import Footer from "./components/footer/footer";
import TOS from "./pages/tos/tos";
import FAQ from "./pages/faq/faq";
import Privacy from "./pages/privacy/privacy";

function App() {
  return (
    <Router>
      <div className="App">
        <Toolbar></Toolbar>
        <Switch>
          <Route path="/tos">
            <TOS />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/show/:showId">
            <ShowPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

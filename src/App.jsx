import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import { NavLink } from "./components";
import { WebDev, Home } from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="Header">
            <NavLink exact>About Me</NavLink>
            <NavLink to="/web-dev">Web Development</NavLink>
          </header>
          <Route path="/" exact render={Home} />
          <Route path="/web-dev" component={WebDev} />
          <Route
            path="/github"
            render={() =>
              (window.location = "https://github.com/JustJarethB/portfolio")
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;

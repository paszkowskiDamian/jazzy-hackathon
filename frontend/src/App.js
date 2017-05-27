import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import { Home } from './Home'
import { Login } from './pages/Login/Login';
import { RouteWithProps } from './RouteWithProps';


class App extends Component {
  state = {
    isUserLoggedIn: false
  }
  render() {
    const { isUserLoggedIn } = this.state;
    return (
      <Router>
        <div className="App">
          <RouteWithProps exact path="/" component={Login} />
          {
            isUserLoggedIn &&
            <Home isUserLoggedIn={isUserLoggedIn} />
          }
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { Home } from './Home'
import { Login } from './pages/Login/Login';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;

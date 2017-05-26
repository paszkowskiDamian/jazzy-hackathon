import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Navigation } from './views/Navigation/Navigation';
import './styles/global.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />


          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

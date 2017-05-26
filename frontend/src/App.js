import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Organizations } from './pages/Organizations/Organizations';
import { Projects } from './pages/Projects/Projects';
import { Events } from './pages/Events/Events';
import { Navigation } from './views/Navigation/Navigation';


class App extends Component {
  state = {
    loggedInUser: {}
  }

  componentDidMount() {
    fetch('http://localhost:3005/users/4')
    .then(res => res.json())
    .then(loggedInUser => this.setState({loggedInUser}));
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <Router>
        <div className="App">
          <Navigation loggedInUser={loggedInUser} />

          <Route exact path="/" component={Organizations} />
          <Route path="/events" component={Events} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;

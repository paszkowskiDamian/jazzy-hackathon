import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { RouteWithProps } from './RouteWithProps';
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
      .then(loggedInUser => this.setState({ loggedInUser }));

    fetch('http://localhost:3005/users/4')
      .then(res => res.json())
      .then(loggedInUser => this.setState({ loggedInUser }));
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <Router>
        <div className="App">
          <Navigation loggedInUser={loggedInUser} />

          <Switch>
            <RouteWithProps exact path="/" component={Organizations} props={{ ...this.state }} />
            <RouteWithProps path="/events" component={Events} props={{ ...this.state }} />
            <RouteWithProps path="/projects" component={Projects} props={{ ...this.state }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

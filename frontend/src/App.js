import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { httpService } from './services/Http';
import { RouteWithProps } from './RouteWithProps';
import { Organizations } from './pages/Organizations/Organizations';
import { Projects } from './pages/Projects/Projects';
import { Events } from './pages/Events/Events';
import { Login } from './pages/Login/Login'


class App extends Component {
  state = {
    loggedInUser: {}
  }

  componentDidMount() {
    httpService.GET('/users/5929385ba77b9a1d5e3a2693')
      .then(loggedInUser => this.setState({ loggedInUser }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Switch>
            <RouteWithProps exact path="/organizations" component={Organizations} props={{ ...this.state }} />
            <RouteWithProps path="/events" component={Events} props={{ ...this.state }} />
            <RouteWithProps path="/projects" component={Projects} props={{ ...this.state }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

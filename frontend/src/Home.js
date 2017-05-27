import React, { Component } from 'react';
import {
  Switch,
} from 'react-router-dom'

import { httpService } from './services/Http';
import { RouteWithProps } from './RouteWithProps';
import { Organizations } from './pages/Organizations/Organizations';
import { Organization } from './pages/Organizations/Organization';
import { Projects } from './pages/Projects/Projects';
import { Events } from './pages/Events/Events';


export class Home extends Component {
  state = {
    loggedInUser: {}
  }

  componentDidMount() {
    httpService.GET('/users/5929385ba77b9a1d5e3a2693')
      .then(loggedInUser => this.setState({ loggedInUser }));
  }

  render() {
    return (
      <Switch>
        <RouteWithProps exact path="/organizations" component={Organizations} props={{ ...this.state }} />
        <RouteWithProps exact path="/organizations/:id" component={Organization} props={{ ...this.state }} />
        <RouteWithProps path="/events" component={Events} props={{ ...this.state }} />
        <RouteWithProps path="/projects" component={Projects} props={{ ...this.state }} />
      </Switch>
    );
  }
}

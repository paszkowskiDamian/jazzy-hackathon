import React, { Component } from 'react';
import {
  Switch,
  Redirect
} from 'react-router-dom'

import { RouteWithProps } from './RouteWithProps';
import { Organizations } from './pages/Organizations/Organizations';
import { Organization } from './pages/Organizations/Organization';
import { Projects } from './pages/Projects/Projects';
import { Panel } from './pages/Panel/Panel';
import { Events } from './pages/Events/Events';


export class Home extends Component {
  render() {
    const { isUserLoggedIn, loggedInUser, logOut } = this.props;
    const propsToPass = {loggedInUser, logOut}
    return (
      isUserLoggedIn ?
      <Switch>
        <RouteWithProps path="/panel" component={Panel} props={{...propsToPass}} />
				<RouteWithProps path="/organizations/:id" component={Organization} props={{...propsToPass}} />
				<RouteWithProps path="/organizations" component={Organizations} props={{...propsToPass}} />
        <RouteWithProps path="/events" component={Events} props={{...propsToPass}} />
        <RouteWithProps path="/projects" component={Projects} props={{...propsToPass}} />
      </Switch> :
      <Redirect to="/"/>
    );
  }
}

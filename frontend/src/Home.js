import React, { Component } from 'react';
import {
  Switch,
  Redirect
} from 'react-router-dom'

import { httpService } from './services/Http';
import { RouteWithProps } from './RouteWithProps';
import { Organizations } from './pages/Organizations/Organizations';
import { Organization } from './pages/Organizations/Organization';
import { Projects } from './pages/Projects/Projects';
import { Panel } from './pages/Panel/Panel';
import { Events } from './pages/Events/Events';


export class Home extends Component {
  state = {
    loggedInUser: {},
  }

  componentDidMount() {
    const { userId, setUserAuthentication } = this.props;
    httpService.GET(`/users/${userId}`)
      .then(res => {
        const { isUserLoggedIn, ...rest } = res;
        setUserAuthentication(isUserLoggedIn);
        if (isUserLoggedIn) {
          console.log(res)
          this.setState({...rest})
        }
      });
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      isUserLoggedIn ?
      <Switch>
        <RouteWithProps exact path="/panel" component={Panel} props={{ ...this.state }} />
        <RouteWithProps exact path="/organizations" component={Organizations} props={{ ...this.state }} />
        <RouteWithProps exact path="/organizations/:id" component={Organization} props={{ ...this.state }} />
        <RouteWithProps exact path="/events" component={Events} props={{ ...this.state }} />
        <RouteWithProps exact path="/projects" component={Projects} props={{ ...this.state }} />
      </Switch> :
      <Redirect to="/"/>
    );
  }
}

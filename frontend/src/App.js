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
    isUserLoggedIn: false,
    userId: '',
  }

  setUserAuthentication = (res) => {
    this.setState({isUserLoggedIn: res.isUserLoggedIn, userId: res.id})
  }
  
  render() {
    const { isUserLoggedIn, userId } = this.state;
    return (
      <Router>
        <div className="App">
          <RouteWithProps exact path="/" component={Login} props={{ ...this.state, setUserAuthentication: this.setUserAuthentication }} />
          {
            isUserLoggedIn &&
            <Home userId={userId} isUserLoggedIn={isUserLoggedIn} setUserAuthentication={this.setUserAuthentication} />
          }
        </div>
      </Router>
    );
  }
}

export default App;

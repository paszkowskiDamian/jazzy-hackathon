import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Home } from './Home'
import { Login } from './pages/Login/Login';
import { RouteWithProps } from './RouteWithProps';


class App extends Component {
  state = {
    loggedInUser: {},
    isUserLoggedIn: false,
    userId: '',
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      this.setState({ isUserLoggedIn: true, loggedInUser: user });
    } else {
      this.setState({ isUserLoggedIn: false, loggedInUser: {} });
    }
  }

  addUser = (isUserLoggedIn, user) => {
    this.setState({ isUserLoggedIn, loggedInUser: user });
    if (isUserLoggedIn) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  logOut = () => {
    this.setState({
      loggedInUser: {},
      isUserLoggedIn: false,
    });
    localStorage.clear();
  }

  render() {
    const { isUserLoggedIn, userId, loggedInUser } = this.state;
    return (
      <Router>
        <div className="App">
          <RouteWithProps path="/" component={Login} props={{ ...this.state, addUser: this.addUser }} />
          {
            isUserLoggedIn &&
            <Home logOut={this.logOut} loggedInUser={loggedInUser} userId={userId} isUserLoggedIn={isUserLoggedIn} setUserAuthentication={this.setUserAuthentication} />
          }
        </div>
      </Router>
    );
  }
}

export default App;

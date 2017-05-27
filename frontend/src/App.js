import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import { Home } from './Home'
import { Login } from './pages/Login/Login';
import { RouteWithProps } from './RouteWithProps';


class App extends Component {
  state = {
    isUserLoggedIn: false,
    userId: '',
  }

  componentWillUnmount() {
    console.log('TEST')
  }

  componentWillMount() {
    // const userId = localStorage.getItem("userId");
    // if (userId !== '') {
    //   this.setState({isUserLoggedIn: true})
    // } else {
    //   this.setState({isUserLoggedIn: false})
    // }
  }

  setUserAuthentication = (isUserLoggedIn, ...rest) => {
    // if (res.isUserLoggedIn) {
    //   localStorage.setItem('userId', res.id);
    // }
    this.setState({isUserLoggedIn: isUserLoggedIn, ...rest})
  }
  
  render() {
    const { isUserLoggedIn, userId } = this.state;
    return (
      <Router>
        <div className="App">
          <RouteWithProps path="/" component={Login} props={{ ...this.state, setUserAuthentication: this.setUserAuthentication }} />
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

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <div className="ui three item menu">
                <NavLink to="/" activeClassName="active" exact className="item">Home</NavLink>
                <NavLink to="/about" activeClassName="active" exact className="item">About</NavLink>
                <NavLink to="/events" activeClassName="active" exact className="item">Upcoming Events</NavLink>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Tabs extends Component {
    render() {
        return (
            <div className="navigation-tabs-wrapper">
                <NavLink to="/" activeClassName="active" exact className="item">Organizacje</NavLink>
                <NavLink to="/projects" activeClassName="active" exact className="item">Projekty</NavLink>
                <NavLink to="/events" activeClassName="active" exact className="item">Wydarzenia</NavLink>
            </div>
        );
    }
} 
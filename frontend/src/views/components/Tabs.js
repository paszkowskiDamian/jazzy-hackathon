import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Tabs extends Component {
    render() {
        return (
            <div className="navigation-tabs-wrapper">
                <NavLink activeOnlyWhenExact to="/organizations" activeClassName="active" exact className="item">Organizacje</NavLink>
                <NavLink activeOnlyWhenExact to="/projects" activeClassName="active" exact className="item">Projekty</NavLink>
                <NavLink activeOnlyWhenExact to="/events" activeClassName="active" exact className="item">Wydarzenia</NavLink>
            </div>
        );
    }
} 
import React, { Component } from 'react';
import { Card } from '../../views/components/Card';


import { Navigation } from '../../views/Navigation/Navigation';

export class Projects extends Component {
    render() {
        const { loggedInUser, logOut } = this.props;
        return (
            <div className="panel-wrapper">
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
                <div className="user-image-layout">
                    <h2 className="header" >Projekty</h2>
                    <img className="user-background" src={'https://images.unsplash.com/photo-1490225110719-148c048da5fe?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg='} alt='background' />
                </div>
                <div className="organizations-wrapper">
                    <div className="organization-cards">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        );
    }
}

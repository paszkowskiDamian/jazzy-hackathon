import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';
import { Map } from './../../views/components/Map'
import { Card } from '../../views/components/Card';
import { organizations } from '../../data/organizations';


export class Organizations extends Component {
    state = {
        organizations
    }
    
    render() {
        const { loggedInUser } = this.props;
        return (
        	<div>
                <Navigation loggedInUser={loggedInUser} />
			    <Map />
                <div className="organizations-wrapper">
                    <div className="organization-cards">
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
                        <Card loggedInUser={loggedInUser} />
			        </div>
                </div>
			</div>
        );
    }
}

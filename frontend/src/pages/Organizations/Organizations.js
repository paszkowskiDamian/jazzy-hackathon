import React, { Component } from 'react';

import { Map } from './../../views/components/Map'
import { Card } from '../../views/components/Card';


export class Organizations extends Component {
    render() {
        const { loggedInUser } = this.props;
        return (
        	<div>
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

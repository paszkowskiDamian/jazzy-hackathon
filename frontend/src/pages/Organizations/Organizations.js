import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';
import { Map } from './../../views/components/Map'
import { Card } from '../../views/components/Card';
import { SearchBar } from '../../views/components/SearchBar';
import { organizations } from '../../data/organizations';
import { httpService } from '../../services/Http';


export class Organizations extends Component {
    componentWillMount() {
        httpService.GET('/organizations/search/all/all/50').then(res => this.setState(res))
    }

    state = {
        organizations: [],
    }

    render() {
        const { loggedInUser, logOut } = this.props;
        return (
            <div className="organizations">
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
                <Map />
                <SearchBar />
                <div className="organizations-wrapper">
                    <div className="organization-cards">
                        {this.state.organizations.map(organization => <Card
                            key={organization.name}
                            loggedInUser={loggedInUser} 
                            title={organization.name}
                            id={organization.id}
                            description={organization.description}
                            image={organization.logo}
														link={`/organizations/${organization.id}`}
                            userCount={organization.users.length} />)}
                    </div>
                </div>
            </div>
        );
    }
}

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCfuRXAEi0pRhA_bqpzC7bhXEShLfVGCDE

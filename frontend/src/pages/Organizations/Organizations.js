import React, { Component } from 'react';
import geocoder from 'geocoder';
import { debounce } from 'lodash';

import { Navigation } from '../../views/Navigation/Navigation';
import { Map } from './../../views/components/Map'
import { Card } from '../../views/components/Card';
import { SearchBar } from '../../views/components/SearchBar';
import { organizations } from '../../data/organizations';
import { httpService } from '../../services/Http';


export class Organizations extends Component {
    constructor(props) {
        super(props);
        this.debounceGetGeoLocation = debounce(this.getGeoLocation, 1000);
    }
    componentWillMount() {
        httpService.GET('/organizations/search/all/all/50/all').then(res => this.setState(res))
    }

    state = {
        organizations: [],
        name: '',
        location: '',
        locationFound: {},
        tags: []
    }

    getGeoLocation = (e) => {
        geocoder.geocode(e.target.value, (err, data) => {
            if (data.results.length === 1) {
                const locationFound = data.results[0].geometry.location;
                httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/all/50/all`)
                    .then(res => this.setState(res))
            }
        });
    }

    handleChange = (e) => {
        const { name, location, tags, locationFound } = this.state;
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'location') {
            e.persist();
            this.debounceGetGeoLocation(e);
        }


        const nameQuery = name ? name : 'all';
        const locationQuery = location ? location : 'all';
        const tagsQuery = tags.length ? tags.join('') : 'all';


    }

    tagsChange = (tags) => {
        this.setState({ tags });
    }

    render() {
        const { loggedInUser, logOut } = this.props;
        return (
            <div className="organizations">
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
                <Map places={this.state.organizations} />
                <SearchBar {...this.state} tagsChange={this.tagsChange} handleChange={this.handleChange} />
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

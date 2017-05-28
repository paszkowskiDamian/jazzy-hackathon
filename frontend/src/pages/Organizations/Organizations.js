import React, { Component } from 'react';
import geocoder from 'geocoder';
import { debounce } from 'lodash';

import { Navigation } from '../../views/Navigation/Navigation';
import { Map } from './../../views/components/Map'
import { Card } from '../../views/components/Card';
import { SearchBar } from '../../views/components/SearchBar';
import { httpService } from '../../services/Http';


export class Organizations extends Component {
    constructor(props) {
        super(props);
        this.debounceGetGeoLocation = debounce(this.getGeoLocation, 500);
        this.debounceTagSearch = debounce(this.searchByTag, 500);
        this.debounceSearchByName = debounce(this.searchByName, 500);
    }
    componentDidMount() {
        httpService.GET('/organizations/search/all/all/50/all')
            .then(res => this.setState(res))
    }

    state = {
        organizations: [],
        name: '',
        location: '',
        locationFound: {},
        tags: []
    }

    searchByName = (name) => {
        const { location, locationFound, tags } = this.state;

        const nameQuery = name ? name : 'all';
        const tagsQuery = tags.length ? tags.join(',') : 'all';

        if (location) {
            httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                .then(res => this.setState(res));
        } else {
            httpService.GET(`/organizations/search/all/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                .then(res => this.setState(res));
        }
    }

    searchByTag = (tags) => {
        const { name, location, locationFound } = this.state;

        const nameQuery = name ? name : 'all';
        const tagsQuery = tags.length ? tags.join(',') : 'all';


        if (location) {
            httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                .then(res => this.setState(res))
        } else {
            httpService.GET(`/organizations/search/all/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                .then(res => this.setState(res))
        }
    }

    getGeoLocation = (value) => {
        const { name, tags } = this.state;

        const nameQuery = name ? name : 'all';
        const tagsQuery = tags.length ? tags.join(',') : 'all';

        geocoder.geocode(value, (err, data) => {
            if (value) {
                if (data.results.length === 1) {
                    const locationFound = data.results[0].geometry.location;
                    this.setState({ locationFound });
                    httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                        .then(res => this.setState(res))
                }
            } else {
                httpService.GET(`/organizations/search/all/${encodeURI(tagsQuery)}/50/${encodeURI(nameQuery)}`)
                    .then(res => this.setState(res))
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'location') {
            this.debounceGetGeoLocation(e.target.value);
        } else if (e.target.name === 'name') {
            this.debounceSearchByName(e.target.value);
        }
    }

    tagsChange = (tags) => {
        this.setState({ tags });
        this.debounceTagSearch(tags);

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
                            userCount={organization.users.length}
                            suburb={organization.location.suburb} />)}
                    </div>
                </div>
            </div>
        );
    }
}

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCfuRXAEi0pRhA_bqpzC7bhXEShLfVGCDE

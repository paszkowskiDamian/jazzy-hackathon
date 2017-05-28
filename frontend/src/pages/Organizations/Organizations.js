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
        this.debounceGetGeoLocation = debounce(this.getGeoLocation, 500);
        this.debounceTagSearch = debounce(this.searchByTag, 500);
        this.debounceSearchByName = debounce(this.searchByName, 500);
    }
    componentDidMount() {
        httpService.GET('/organizations/search/all/all/50')
            .then(res => this.setState(res))
    }

    state = {
        organizations: [],
        name: '',
        location: '',
        locationFound: {},
        tags: []
    }

    filterByName = (res, name) => {
        if (name) {
            const organizations = res.organizations.filter(organization => (new RegExp(`^${name}.*`, "i").test(organization.location.suburb)));
            this.setState({ organizations })
        } else {
            this.setState(res)
        }
    }

    searchByName = (name) => {
        const { tags, location, locationFound } = this.state;
        const tagSearchQuery = tags.length ? tags.join(',') : 'all';

        if (location) {
            httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${tagSearchQuery}/50`)
                .then(res => this.filterByName(res, name));
        } else {
            httpService.GET(`/organizations/search/all/${tagSearchQuery}/50`)
                .then(res => this.filterByName(res, name))
        }
    }

    searchByTag = (tags, location, locationFound) => {
        const tagSearchQuery = tags.length ? tags.join(',') : 'all';

        if (location) {
            httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${tagSearchQuery}/50`)
                .then(res => this.setState(res))
        } else {
            httpService.GET(`/organizations/search/all/${tagSearchQuery}/50`)
                .then(res => this.setState(res))
        }
    }

    getGeoLocation = (value, name, tagsQuery) => {
        geocoder.geocode(value, (err, data) => {
            if (value) {
                if (data.results.length === 1) {
                    const locationFound = data.results[0].geometry.location;
                    this.setState({ locationFound });
                    httpService.GET(`/organizations/search/${locationFound.lng},${locationFound.lat}/${tagsQuery}/50`)
                        .then(res => this.setState(res))
                }
            } else {
                httpService.GET(`/organizations/search/all/${tagsQuery}/50`)
                    .then(res => this.setState(res))
            }
        });
    }

    handleChange = (e) => {
        const { name, location, tags, locationFound } = this.state;
        this.setState({
            [e.target.name]: e.target.value
        });


        const nameQuery = name ? name : 'all';
        const tagsQuery = tags.length ? tags.join(',') : 'all';

        if (e.target.name === 'location') {
            this.debounceGetGeoLocation(e.target.value, nameQuery, tagsQuery);
        } else if (e.target.name === 'name') {
            this.debounceSearchByName(e.target.value);
        }
    }

    tagsChange = (tags) => {
        const { location, locationFound } = this.state;
        this.setState({ tags });
        this.debounceTagSearch(tags, location, locationFound)

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

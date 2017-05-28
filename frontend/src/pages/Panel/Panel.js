import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';
import { SearchBar } from '../../views/components/SearchBar';
import { Card } from '../../views/components/Card';

export class Panel extends Component {
    state = {
        all: [],
        name: '',
        location: '',
        tags: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    tagsChange = (tags) => {
        this.setState({ tags });
    }

    render() {
        const { loggedInUser, logOut } = this.props;
        return (
            <div className="panel-wrapper">
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
                <div className="user-image-layout">
                    <SearchBar tagsChange={this.tagsChange} handleChange={this.handleChange} {...this.state} />
                    <img className="user-background" src={'https://images.unsplash.com/photo-1473041117018-269bc8c130de?dpr=1&auto=format&fit=crop&w=1500&h=1061&q=80&cs=tinysrgb&crop=&bg='} alt='background' />
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

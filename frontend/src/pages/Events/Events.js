import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';
import { Card } from '../../views/components/Card';

export class Events extends Component {
    render() {
        const { loggedInUser, logOut } = this.props;
        return (
        	 <div className="panel-wrapper">
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
                <div className="user-image-layout">
                    <h2 className="header" >Wydarzenia</h2>
                    <p></p>
                    <img className="user-background" src={'https://images.unsplash.com/photo-1478809319988-35cad52fd89c?dpr=1&auto=format&fit=crop&w=1500&h=1200&q=80&cs=tinysrgb&crop=&bg='} alt='background' />
                </div>
                <div className="organizations-wrapper">
                    <div className="organization-cards">
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                        <Card image="https://www.geospatialworld.net/wp-content/plugins/events-calendar-pro/src/resources/images/tribe-related-events-placeholder.png" />
                    </div>
                </div>
            </div>
        );
    }
}

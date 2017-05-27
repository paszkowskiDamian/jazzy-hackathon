import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';

export class Events extends Component {
    render() {
        const { loggedInUser } = this.props;
        return (
        	<div>
                <Navigation loggedInUser={loggedInUser} />
                <p>Events</p>
            </div>
        );
    }
}

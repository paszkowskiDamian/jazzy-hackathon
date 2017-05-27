import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';

export class Projects extends Component {
    render() {
        const { loggedInUser, logOut } = this.props;
        return (
        	<div>
                <Navigation logOut={logOut} loggedInUser={loggedInUser} />
            <p>Projects</p>
            </div>
        );
    }
}

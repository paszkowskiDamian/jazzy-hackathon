import React, { Component } from 'react';

import { Navigation } from '../../views/Navigation/Navigation';

export class Organization extends Component {
	render() {
		const { loggedInUser } = this.props;

		console.log('ha ', this.props);
		return (
			<div>
				<Navigation loggedInUser={loggedInUser} />
				<p>Organization</p>
			</div>
		);
	}
}

import React, { Component } from 'react';

// that component cover hole page area, we can use that when we display options in select to avoid opening couple selects
export default class OverlayBlocker extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div onClick={this.props.onClick} className="overlay-blocker-component" style={{zIndex: this.props.zIndex}}></div>
		);
	}
}

import React, { Component } from 'react';

import { Logo } from '../components/Logo';
import { Tabs } from '../components/Tabs';
import { SearchInput } from '../components/SearchInput';
import { UserTab } from '../components/UserTab';
import classnames from 'classnames';

export class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollDirectionDown: false,
			scrollTopPosition: 0,
			pinned: true,
		};
	}

	handleScroll = () => {
		const mainContainer = document.querySelector('#root');
		const viewContent = document.querySelector('#root');

		const oldScrollTopPosition = this.state.scrollTopPosition;
		const currentScrollTopPosition = viewContent.getBoundingClientRect().top;
		const scrollDirectionDown = currentScrollTopPosition - oldScrollTopPosition < 0;

		this.setState({
			scrollDirectionDown,
			scrollTopPosition: currentScrollTopPosition,
		});
	}

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, true);
	}

	render() {
		const { name, avatar } = this.props.loggedInUser;
		const { logOut } = this.props;

		return (
			<div className={classnames('navigation', { 'hide-nav': this.state.scrollDirectionDown })}>
				<Logo />
				<Tabs />
				<SearchInput />
				<UserTab logOut={logOut} name={name} avatar={avatar} />
			</div>
		);
	}
}

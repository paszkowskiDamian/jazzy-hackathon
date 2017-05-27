import React, { Component } from 'react';

import { Logo } from '../components/Logo';
import { Tabs } from '../components/Tabs';
import { SearchInput } from '../components/SearchInput';
import { UserTab } from '../components/UserTab';

export class Navigation extends Component {
    render() {
        const { name, avatar } = this.props.loggedInUser;
        const { logOut } = this.props;

        return (
            <div className="navigation">
                <Logo />
                <Tabs />
                <SearchInput />
                <UserTab logOut={logOut} name={name} avatar={avatar} />
            </div>
        );
    }
}

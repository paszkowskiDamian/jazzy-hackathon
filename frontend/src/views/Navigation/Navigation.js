import React, { Component } from 'react';

import { Logo } from '../components/Logo';
import { Tabs } from '../components/Tabs';
import { SearchInput } from '../components/SearchInput';
import { UserTab } from '../components/UserTab';

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Logo />
                <Tabs />
                <SearchInput />
                <UserTab />
            </div>
        );
    }
}

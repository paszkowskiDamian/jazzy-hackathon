import React, { Component } from 'react';

import { Avatar } from './Avatar';

export class UserTab extends Component {
    render() {
        const { name, avatar, logOut } = this.props;
        return (
            <div className="user-tab">
                <div className="user-details">
                    <span>{name}</span>
                    <span onClick={() => logOut()}>Logout</span>
                </div>
                <Avatar avatar={avatar} />
            </div>
        );
    }
}
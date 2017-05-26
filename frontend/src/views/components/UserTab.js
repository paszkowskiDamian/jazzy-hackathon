import React, { Component } from 'react';

import { Avatar } from './Avatar';

export class UserTab extends Component {
    render() {
        const { name, avatar } = this.props;
        return (
            <div className="user-tab">
                <div className="user-details">
                    <span>{name}</span>
                    <span>Logout</span>
                </div>
                <Avatar avatar={avatar} />
            </div>
        );
    }
}
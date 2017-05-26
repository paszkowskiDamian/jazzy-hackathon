import React, { Component } from 'react';

import { Avatar } from './Avatar';

export class UserTab extends Component {
    render() {
        return (
            <div className="user-tab">
                <div className="user-details">
                    <span>John Smith</span>
                    <span>Logout</span>
                </div>
                <Avatar />
            </div>
        );
    }
}
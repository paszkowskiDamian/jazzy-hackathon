import React, { Component } from 'react';
import { Map } from './../../views/components/Map'


export class Organizations extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '60vh' }}>
                <Map />
            </div>
        );
    }
}

import React, { Component } from 'react';

export class Marker extends Component {
    render() {

        return (
            <div className="marker">
                <svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 45"><title>pin</title><path d="M10,44.79c1.38,0,2.65-25.31,3.82-25.83a9.54,9.54,0,0,0,5-5.22A9.92,9.92,0,0,0,19.56,10a9.93,9.93,0,0,0-.71-3.75,9.82,9.82,0,0,0-2-3.12,9.46,9.46,0,0,0-3-2.14A9.23,9.23,0,0,0,10,.21,9.24,9.24,0,0,0,6.19,1a9.48,9.48,0,0,0-3,2.14A9.93,9.93,0,0,0,.44,10a9.94,9.94,0,0,0,.71,3.75,9.54,9.54,0,0,0,5,5.22C7.35,19.48,8.62,44.79,10,44.79Z"/></svg>
                <div className="popup">
                </div>
            </div>
        );
    }
}

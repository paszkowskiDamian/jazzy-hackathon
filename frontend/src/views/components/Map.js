import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import { mapStyle } from './../helpers/mapStyle'


export class Map extends Component {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [50.292693, 18.666345],
        zoom: 15,
        greatPlaceCoords: { lat: 50.292693, lng: 18.666345 }
    };

    constructor(props) {
        super(props);
    }

    createMapOptions(map) {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: true,
            styles: mapStyle,
        }
    }

    render() {
        return (
            <GoogleMap
                apiKey="AIzaSyBLS_NpKl0zF9eUlWwPxsGEb6hReanSNLo" // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}
                options={this.createMapOptions}>
                {/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}  />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />*/}
            </GoogleMap>
        );
    }
}
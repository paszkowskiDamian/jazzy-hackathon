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
        zoom: 15,
        greatPlaceCoords: { lat: 50.292693, lng: 18.666345 }
    };
    state = { center: [] }

    componentWillMount() {
        if (navigator) {
            navigator.geolocation.getCurrentPosition((position => {
                this.setState({ center: [position.coords.latitude, position.coords.longitude] })
            }));
        } else {
            this.setState({ center: [50.292693, 18.666345] })
        }
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
            <div style={{ width: '100%', height: '60vh' }}>
                <GoogleMap
                    apiKey="AIzaSyBLS_NpKl0zF9eUlWwPxsGEb6hReanSNLo" // set if you need stats etc ...
                    center={this.state.center}
                    zoom={this.props.zoom}
                    options={this.createMapOptions}>
                    {/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}  />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />*/}
                </GoogleMap>
            </div>
        );
    }
}
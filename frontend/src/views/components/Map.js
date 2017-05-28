import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import { mapStyle } from './../helpers/mapStyle'
import { Marker } from './Marker';

const { LatLng, LatLngBounds } = window.google.maps;
const _Marker = window.google.maps.Marker;

export class Map extends Component {
    static defaultProps = {
        zoom: 15,
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
            scrollwheel: false,
            styles: mapStyle,
        }
    }

    render() {
        const { places } = this.props;
        return (
            <div style={{ width: '100%', height: '70vh', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <GoogleMap
                    apiKey="AIzaSyBLS_NpKl0zF9eUlWwPxsGEb6hReanSNLo" // set if you need stats etc ...
                    center={this.state.center}
                    zoom={this.props.zoom}
                    options={this.createMapOptions}>
                    {places.map(place => place.location && place.location.geo && <Marker key={place.id} lat={place.location.geo[1]} lng={place.location.geo[0]} />)}
                </GoogleMap>
            </div>
        );
    }
}
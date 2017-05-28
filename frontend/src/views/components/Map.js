import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import { mapStyle } from './../helpers/mapStyle'
import { Marker } from './Marker'

export class Map extends Component {
    static defaultProps = {
        zoom: 15,
    };
    state = { center: [] }

    componentDidMount() {
        // if (navigator) {
        //     navigator.geolocation.getCurrentPosition((position => {
        //         this.setState({ center: [position.coords.latitude, position.coords.longitude] })
        //     }));
        // } else {
        //     this.setState({ center: [50.292693, 18.666345] })
        // }
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
        return (
            <div style={{ width: '100%', height: '80vh', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: "AIzaSyBLS_NpKl0zF9eUlWwPxsGEb6hReanSNLo",
                        language: 'pl',
                    }}
                    center={this.state.center}
                    zoom={this.props.zoom}
                    options={this.createMapOptions}>
                    <Marker lat={50.292693} lng={18.666345} />
                    {this.props.places.map(place => {
                        return place.location.geo ? <Marker key={place.id} lat={place.location.geo[0]} lng={place.location.geo[1]} /> : ""
                    })}
                </GoogleMap>
            </div>
        );
    }
}
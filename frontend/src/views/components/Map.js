import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import { mapStyle } from './../helpers/mapStyle'
import { Marker } from './Marker';


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
            <div style={{ width: '100%', height: '60vh', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <GoogleMap
                    apiKey="AIzaSyBLS_NpKl0zF9eUlWwPxsGEb6hReanSNLo" // set if you need stats etc ...
                    center={this.state.center}
                    zoom={this.props.zoom}
                    options={this.createMapOptions}>
                    {places.map(place =>place.location && place.location.geo && <Marker key={place.id} lat={place.location.geo[1]} lng={place.location.geo[0]} />)}
                    {/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'A'}  />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} />*/}
                </GoogleMap>
            </div>
        );
    }
}
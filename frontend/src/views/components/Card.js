import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as geocoder from 'geocoder';

export class Card extends Component {
    state = {
        adress: ""
    }

    componentWillMount() {
        // const { location } = this.props;
        // if (location && location.length === 2) {
        //     geocoder.reverseGeocode(location[1], location[0], function (err, data) {
        //         if (!err && data.length){
        //             this.setState({ adress: data[0].formatted_address })
        //             console.log(this.setState)
        //         }
        //     });
        // }
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="card-img">
                    {this.props.image ?
                        <img src={this.props.image} className="image" alt="some-organization" /> :
                        <img src={'https://source.unsplash.com/random'} alt="some-organization" />}
                    <h3>{this.props.title}</h3>
                </div>
                <div className="card-details">
                    <div className="name">
                        <span>Creative Minds</span>
                    </div>
                    <div className="location">
                        <span>{this.state.adress ? this.state.adress : "Gliwice"}</span>
                    </div>
                    <div className="description">
                        <span>extra curricular opportunities to learn </span>
                    </div>
                    <div className="links">
                        <strong>SHARE</strong> <strong>EXPLORE</strong>
                    </div>
                </div>
            </div>
        );
    }
}
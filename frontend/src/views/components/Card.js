import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Card extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="card-wrapper">
							<a href={this.props.link}>
								<div className="card-img">
									{this.props.image ?
										<img src={this.props.image} className="image" alt="some-organization" /> :
										<img src={'https://source.unsplash.com/random'} alt="some-organization" />}
									<h3>{this.props.title}</h3>
								</div>
							</a>
                <div className="card-details">
                    <div className="name">
                        <span>Creative Minds</span>
                    </div>
                    <div className="location">
                        <span>Gliwice</span>
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

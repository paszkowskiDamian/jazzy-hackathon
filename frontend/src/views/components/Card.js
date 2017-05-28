import React, { Component } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
							<a href={this.props.link}>
								<div className="card-img">
									{this.props.image ?
										<img src={this.props.image} className="image" alt="some-organization" /> :
										<img src={'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder.png'} alt="some-organization" />}
									<h3>{this.props.title}</h3>
								</div>
							</a>
                <div className="card-details">
                    <div className="name">
                        <span>Creative Minds</span>
                    </div>
                    <div className="location">
                        <span>{this.props.suburb}</span>
                    </div>
                    <div className="description">
                        <span>extra curricular opportunities to learn </span>
                    </div>
                    <div className="links">
                        <strong>UDOSTĘPNIJ</strong> <strong>DOŁĄCZ</strong>
                    </div>
                </div>
            </div>
        );
    }
}

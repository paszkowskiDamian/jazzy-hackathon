import React, { Component } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={'https://images.unsplash.com/photo-1495511623436-ba44aaee07cf?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg='} alt="some-organization" />
                    <h3>HighFlyers</h3>
                </div>
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
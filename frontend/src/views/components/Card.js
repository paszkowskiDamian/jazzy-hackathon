import React, { Component } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={'https://static1.squarespace.com/static/56b6236401dbaea0266f7993/t/572969aa27d4bd169dc5f61e/1462331819357/creatives1.jpg?format=1500w'} alt="some-organization" />
                    <h3>Top 10 Australian lakes</h3>
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
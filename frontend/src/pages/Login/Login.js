import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
        	<div className="login-page">
			   {/*<NavLink to="/organizations" activeClassName="active" exact className="item">Organizacje</NavLink>*/}
               <div className="text" >
                   <h1>Cześć!</h1>
                   <p>Jesteś jeden krok od dołączenia do grona osób...</p>
               </div>
               <div className="card-container" >
                   <div className="login-card"></div>
               </div>
			</div >
        );
    }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="logo">LOGO</div>
                {/*<NavLink to="/organizations" activeClassName="active" exact className="item">Organizacje</NavLink>*/}
                <div className="text-container" >
                    <div className="text-card">
                        <h1>Cześć!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nulla vitae mauris accumsan, et pretium ex sagittis. Donec tristique viverra enim.</p>
                    </div>
                </div>
                <div className="card-container" >
                    <div className="login-card">
                        <div className="logo-card">LOGO</div>
                        <div className="form-group">
                            <div className="input-group">
                                <label>Login:</label>
                                <input type="text" placeholder="Podaj swój login"/>
                            </div>
                            <div className="input-group">
                                <label>Hasło:</label>
                                <input type="password" placeholder="Podaj swoje hasło"/>
                            </div>
                        </div>
                        <div className="button-group">
                            <input type="button" value="Zaloguj się" />
                            <input type="button" className="new-account" value="Utwórz nowe konto" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

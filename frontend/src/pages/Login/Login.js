/* eslint no-restricted-globals: 0 */
import React, { Component } from 'react';
import { RegistrationModal } from './../../views/components/RegistrationModal'
import { Logo } from './../../views/components/Logo'
import { Redirect } from 'react-router-dom';

import { httpService } from '../../services/Http';

export class Login extends Component {
    state = {
        isHidden: true,
        email: '',
        password: '',
    }

    toggleModal = () => {
        this.setState({ isHidden: !this.state.isHidden })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    logIn = (e) => {
        const { email, password } = this.state;
        const { setUserAuthentication } = this.props;
        httpService.POST('/login', JSON.stringify({ email, password }))
            .then((res) => setUserAuthentication(res));
    }

    render() {
        const { email, password } = this.state;
        const { isUserLoggedIn } = this.props;
        const path = location.pathname;

        return (
            isUserLoggedIn ?
                <Redirect to={`${path === '/' ? '/panel' : path }`} /> : (
                    <div className="login-page">
                        <RegistrationModal toggleModal={this.toggleModal} isHidden={this.state.isHidden} />
                        <div className="logo-card"><Logo /></div>
                        <div className="text-container" >
                            <div className="text-card">
                                <h1>Cześć!</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum nulla vitae mauris accumsan, et pretium ex sagittis. Donec tristique viverra enim.</p>
                            </div>
                        </div>
                        <div className="card-container" >
                            <div className="login-card">
                                <div className="logo-card logo-purple"><Logo /></div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <label>Login:</label>
                                        <input name="email" value={email} type="text" placeholder="Podaj swój login" onChange={this.handleChange} />
                                    </div>
                                    <div className="input-group">
                                        <label>Hasło:</label>
                                        <input name="password" value={password} type="password" placeholder="Podaj swoje hasło" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="button-group">
                                    <input type="button" value="Zaloguj się" onClick={(e) => this.logIn(e)} />
                                    <input type="button" className="new-account" onClick={() => this.toggleModal()} value="Utwórz nowe konto" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
        );
    }
}

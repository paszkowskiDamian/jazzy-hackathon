import React, { Component } from 'react';
import cn from 'classnames';
import { httpService } from '../../services/Http';
import sweetalert from 'sweetalert';


export class RegistrationModal extends Component {
	state = {
		name: 'haaa',
		email: 'a',
		password: 'b',
		repeatPassword: 'c',
		awatar: 'd',
		skill: 'e',
		about: 'f',
	};

	handleChange = (e) => {
		console.log('er ', e.target.name);
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};

	handleClick = () => {
		httpService.POST('/register', JSON.stringify({
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
			about: this.state.about,
			skills: this.state.skill,
			avatar: this.state.awatar
		})).then(result => {
			sweetalert("Użytkownik pomyślnie utworzony !");
		});
	};

    render() {
        const { isHidden, toggleModal } = this.props;
        return (
            <div className={cn('modal', { visible: !isHidden })} >
                <div className={cn('modal-card-container')} >
                    <div className={cn('modal-card', { swipe: isHidden })}>
                        <div className="modal-header">
                            <h2>Dołacz do naszej społeczności</h2>
                            <p>Znajduj ludzi takich jak Ty, twórzcie razem</p>
                        </div>
                        <div className="form">
                            <div className="form-col">
                                <div className="form-gruop">
                                    <label>Imię i Nazwisko</label>
                                    <input value={this.state.name} onChange={this.handleChange} name="name" type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Emial</label>
                                    <input value={this.state.email} onChange={this.handleChange} name="email" type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Hasło</label>
                                    <input value={this.state.password} onChange={this.handleChange} name="password" type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Powtórz hasło</label>
                                    <input value={this.state.repeatPassword} onChange={this.handleChange} name="repeatPassword" type="text" />
                                </div>
                            </div>
                            <div className="form-col mobile-off">
                                <div className="form-gruop">

                                    <div className="form-gruop">
                                        <label>Awatar</label>
                                        <input value={this.state.awatar} onChange={this.handleChange} name="awatar" type="text" />
                                    </div>
                                    <div className="form-gruop">
                                        <label>Skill</label>
                                        <input value={this.state.skill} onChange={this.handleChange} name="skill" type="text" />
                                    </div>
                                    <div className="form-gruop">
                                        <label>O mnie</label>
                                        <input value={this.state.about} onChange={this.handleChange} name="about" type="text" />
                                    </div>

                                </div>
                            </div>
                        </div>
                            <input onClick={this.handleClick} type="button" className="formButton" value="Dołącz"/>
                    </div>
                </div>
                <div className={cn('bg-modal', { fade: isHidden })} onClick={() => toggleModal()} ></div>
            </div>
        );
    }
}

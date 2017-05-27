import React, { Component } from 'react';
import cn from 'classnames';


export class RegistrationModal extends Component {
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
                                    <input type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Emial</label>
                                    <input type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Hasło</label>
                                    <input type="text" />
                                </div>
                                <div className="form-gruop">
                                    <label>Powtórz hasło</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="form-col mobile-off">
                                <div className="form-gruop">

                                    <div className="form-gruop">
                                        <label>Awatar</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-gruop">
                                        <label>Skill</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-gruop">
                                        <label>O mnie</label>
                                        <input type="text" />
                                    </div>

                                </div>
                            </div>
                        </div>
                            <input type="button" className="formButton" value="Dołącz"/>
                    </div>
                </div>
                <div className={cn('bg-modal', { fade: isHidden })} onClick={() => toggleModal()} ></div>
            </div>
        );
    }
}
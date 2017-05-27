import React, { Component } from 'react';
import cn from 'classnames';


export class RegistrationModal extends Component {
    render() {
        const { isHidden, toggleModal } = this.props;
        return (
            <div className="modal">
                <div className={cn('modal-card-container', { swipe: isHidden })} > 
                    <div className={'modal-card'}>CARD</div>
                </div>
                <div className={cn('bg-modal', { hide: isHidden })} onClick={() => toggleModal()} ></div>
            </div>
        );
    }
}
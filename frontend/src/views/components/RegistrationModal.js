import React, { Component } from 'react';
import cn from 'classnames';


export class RegistrationModal extends Component {
    render() {
        const { isHidden, toggleModal } = this.props;
        return (
            <div className={cn('modal', {visible: !isHidden})} >
                <div className={cn('modal-card-container')} > 
                    <div className={cn('modal-card', { swipe: isHidden })}>CARD</div>
                </div>
                <div className={cn('bg-modal', { fade: isHidden })} onClick={() => toggleModal()} ></div>
            </div>
        );
    }
}
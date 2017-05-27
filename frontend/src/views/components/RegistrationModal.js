import React, { Component } from 'react';
import cn from 'classnames';


export class RegistrationModal extends Component {
    render() {
        const {isHidden, toggleModal } = this.props;
        return (
            <div className={cn('registration-modal', { hide: isHidden })} onClick={ () => toggleModal()  } >
                MODAL
            </div>
        );
    }
}
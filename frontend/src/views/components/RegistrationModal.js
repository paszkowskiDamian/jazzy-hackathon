import React, { Component } from 'react';
import cn from 'classnames';


export class RegistrationModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.hide);
        return (
            <div className={cn('registration-modal', { show: this.props.hide })} onClick={} >
                MODAL
            </div>
        );
    }
}
import React from 'react';

export function Avatar({ avatar }) {
    return (
        <div className="avatar">
            <img src={`${avatar ? avatar : 'http://www.cctw.gig.eu/cscore/images/Osoby-kontaktowe/profile-default-male.png'}`} alt="Someone"/>
        </div>
    );
}

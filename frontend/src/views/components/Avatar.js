import React from 'react';

export function Avatar({ avatar }) {
    return (
        <div className="avatar">
            <img src={`${avatar ? avatar : 'https://cdn.dribbble.com/users/291/screenshots/290124/defaultuser.png'}`} alt="Someone"/>
        </div>
    );
}

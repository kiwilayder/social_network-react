import React from 'react';
import avatar from '../img/avatar.jpg';

const Profile = () => {
    return ( 
    <div className='profile card-glass'>
        <div className="profile__info">
            <img className='profile__avatar' src={avatar}/>
            <div className="profile__about">
                <div className="profile__name"><h1>Kiwi Layder</h1></div>
                <ul className='profile__list'>
                    <li className='profile__list-item'>Date of birth: 22.08.22</li>
                    <li className='profile__list-item'>City: Samosir</li>
                    <li className='profile__list-item'>Education: BSU Samosir</li>
                    <li className='profile__list-item'>GitHub: github.com/kiwilayder</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Profile;
import React from 'react';
import avatar from '../../img/avatar.jpg';
import s from './Profile.module.css';

const Profile = () => {
    return ( 
    <div className={s.profile}>
        <div className={s.info}>
            <img className={s.avatar} src={avatar} alt='logo'/>
            <div className={s.about}>
                <div className={s.name}><h1>Kiwi Layder</h1></div>
                <ul className={s.list}>
                    <li className={s.item}>Date of birth: 22.08.22</li>
                    <li className={s.item}>City: Samosir</li>
                    <li className={s.item}>Education: BSU Samosir</li>
                    <li className={s.item}>GitHub: github.com/kiwilayder</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Profile;
import React from 'react';
import logo from '../img/logo.png'


const Header = () => {
    return ( 
        <header className='header'>
            <img className='header__logo' src={logo}/>
        </header>
    );
}

export default Header;
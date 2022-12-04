import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.item}><a className={s.link} href='#'>Profile</a></li>
          <li className={s.item}><a className={s.link} href='#'>Messages</a></li>
          <li className={s.item}><a className={s.link} href='#'>News</a></li>
          <li className={s.item}><a className={s.link} href='#'>Music</a></li>
          <li className={s.item}><a className={s.link} href='#'>Settings</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;
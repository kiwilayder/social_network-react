import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink className={setActive} to="/profile">
                  Profile
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={setActive} to="/dialogs">
                  Messages
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={setActive} to="/news">
                  News
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={setActive} to="/music">
                  Music
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={setActive} to="/settings">
                  Settings
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;

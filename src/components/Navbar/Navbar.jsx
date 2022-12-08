import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <ul className={s.list}>
            <li className={s.item}>
               <NavLink className={(navData) => (navData.isActive ? s.active : s.link)} to="/profile">
                  Profile
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={(navData) => (navData.isActive ? s.active : s.link)} to="/dialogs">
                  Messages
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={(navData) => (navData.isActive ? s.active : s.link)} to="/news">
                  News
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={(navData) => (navData.isActive ? s.active : s.link)} to="/music">
                  Music
               </NavLink>
            </li>
            <li className={s.item}>
               <NavLink className={(navData) => (navData.isActive ? s.active : s.link)} to="/settings">
                  Settings
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;

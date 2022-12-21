import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const Dialog_item = (props) => {
   let path = "/dialogs/" + props.id;
   return (
      <NavLink className={s.item} to={path}>
         <img className={s.item__avatar} src={props.avatar} alt="logo" />

         <div className={s.item__name}>{props.name}</div>
      </NavLink>
   );
};

export default Dialog_item;

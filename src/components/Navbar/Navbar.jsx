import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? style.activeLink : "")}
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? style.activeLink : "")}
        >
          Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? style.activeLink : "")}
        >
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? style.activeLink : "")}
        >
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? style.activeLink : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

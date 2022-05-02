import React from "react";
import style from "./Navbar.module.css";

// let style = {
//   'nav' : 'Navbar_nav__xSdb3',
//   'item' : 'Navbar_item__UxDAL'
// }

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <a>Profile</a>
      </div>
        <div className={style.item}>
          <a>Messages</a>
        </div>
        <div className={style.item}>
          <a>News</a>
        </div>
        <div className={style.item}>
          <a>Music</a>
        </div>
        <div className={style.item}>
          <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;

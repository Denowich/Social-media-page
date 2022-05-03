import React from "react";
import style from "./Navbar.module.css";

let p1 = 'item';
let p2 = 'active';
let proff = `${style.p1} ${style.p2}`


let m1 = 'item';
let m2 = 'activeS'
let musS = `${style.m1} ${style.m2}`

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <a>Profile</a>
      </div>
        <div className={style.item}>
          <a>Messages</a>
        </div>
        <div className={style.item}>
          <a>News</a>
        </div>
        <div className={`${style.item} ${style.activeS}`}>
          <a>Music</a>
        </div>
        <div className={style.item}>
          <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;

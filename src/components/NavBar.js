import React from "react";
import "./NavBar.scss";
import Logo from "../icons/logo";
import Cart from '../icons/cart';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <Logo />
      </div>

      <ul className="main-nav">
        <li>HOME</li>
        <li>SHOP</li>
        <li>MAGAZINE</li>
      </ul>

      <ul className="right-nav">
        <li>
          <Cart />
        </li>
        <li>LOGIN</li>
      </ul>
    </div>
  );
}

export default NavBar;

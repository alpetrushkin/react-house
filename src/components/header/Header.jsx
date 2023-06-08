import React from 'react';
import './header.css';
import logo from "../../assets/images/logo.svg";
import Cart from "../UI/cart/Cart";

const Header = () => {
  return (
    <div className="header">
      <div className="container container-header">
        <div className="header-left">
          <img className="logo" src={logo} alt="logo"/>
          <span className="logo-name">Ink. House</span>
        </div>

        <nav className="header-right">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">Репродукции</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">Новинки</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">О нас</a>
            </li>
          </ul>
          <Cart />
        </nav>
      </div>
    </div>
  );
};

export default Header;
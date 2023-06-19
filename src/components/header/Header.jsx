import React, {useState} from 'react';
import logo from "../../assets/images/logo.svg";
import CartBtn from "../UI/cartBtn/CartBtn";
import Search from "../Search/Search";
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container container-header">
        <div className="header-left">
          <img className="logo" src={logo} alt="logo"/>
          <span className="logo-name">Ink. House</span>
        </div>

        <Search />

        <nav className="header-right">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">Репродукция</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">Новинки</a>
            </li>
            <li className="header-menu-item">
              <a className="header-menu-link" href="#">О нас</a>
            </li>
          </ul>
          <CartBtn/>
        </nav>
      </div>
    </div>
  );
};

export default Header;
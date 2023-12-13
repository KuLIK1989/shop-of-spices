/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../images/logoNew.png";
import cart from "../images/cart-shopping-svgrepo-com.svg";

function Header({ onContacts, onPromo, onMap }) {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <ul className="header__nav">
        <li className="header__nav-contacs" onClick={onContacts}>
          Контакты
        </li>
        <li className="header__nav-promo" onClick={onPromo}>
          Акции
        </li>
        <li className="header__nav-map" onClick={onMap}>
          Как нас найти
        </li>
      </ul>
      {/* //todo переделать под компонент*/}
      <div className="header__cart-box">
        <img className="header__cart-image" src={cart} alt="Корзина" />
        <div className="header__cart-subtitile">Корзина</div>
      </div>
    </div>
  );
}
export default Header;

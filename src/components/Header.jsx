/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo from "../images/logoNew.png";

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
      {/*переделать под корзину*/}
      <div className="header__contacts">
        <button className="header__contacts-vk" />
        <button className="header__contacts-whatsup" />
        <button className="header__contacts-email" />
      </div>
    </div>
  );
}
export default Header;

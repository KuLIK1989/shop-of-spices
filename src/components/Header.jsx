/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <div className="header__nav">
        <button className="header__nav-links">Контакты</button>
        <button className="header__nav-links">Акции</button>
        <button className="header__nav-links">Как нас найти</button>
      </div>
      <div className="header__contacts">
        <button className="header__contacts-vk" />
        <button className="header__contacts-whatsup" />
        <button className="header__contacts-email" />
      </div>
    </div>
  );
}
export default Header;

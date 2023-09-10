/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/logoNew.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <ul className="header__nav">
        <li className="header__nav-contacs">Контакты</li>
        <li className="header__nav-promo">Акции</li>
        <li className="header__nav-map">Как нас найти</li>
      </ul>
      <div className="header__contacts">
        <button className="header__contacts-vk" />
        <button className="header__contacts-whatsup" />
        <button className="header__contacts-email" />
      </div>
    </div>
  );
}
export default Header;

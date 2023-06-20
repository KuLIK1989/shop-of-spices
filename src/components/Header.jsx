/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="" />
      <ul className="header__nav">
        <li className="header__nav-links">Контакты</li>
        <li className="header__nav-links">Акции</li>
        <li className="header__nav-links">Как нас найти</li>
        //!todo посмотреть как можно сделать список красиво. эффект курсора должен работать только на слове
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

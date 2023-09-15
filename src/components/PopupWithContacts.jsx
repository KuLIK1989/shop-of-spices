import PopupWithoutForm from "./PopupWithoutForm";
import MobileIcon from "../images/mobile_icon.png";
import IconEmail from "../images/icon_imail-contacts.png"

function PopupWithContacts({ isOpen, onClose}) {
  return (
    <PopupWithoutForm
      name="contacts"
      title="Наши Контакты"
      isOpen={isOpen}
      onClose={onClose}
      info={
        <div className="contacts">
          Режим работы <br />
          Ежедневно с 09:00 до 18:00
          <br />
          <br />
          <img className="icon__mobile" src={MobileIcon} alt="mobile icon" />
          <span>
          +7 951 668-33-08
          <br />
          +7 950 008-76-26
          <br />
          +7 965 004-40-64
          <br />
          </span>
          <img className="icon__email" src={IconEmail} alt="email icon" />
          armbril@mail.ru
        </div>
      }
    ></PopupWithoutForm>
  );
}
export default PopupWithContacts;

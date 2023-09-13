import PopupWithoutForm from "./PopupWithoutForm";

function PopupWithContacts({ isOpen, onClose }) {
  return (
    <PopupWithoutForm
      name="contacts"
      title="Наши Контакты"
      isOpen={isOpen}
      onClose={onClose}
      info={`Адрес: город Санкт-Петербург, проспект Юрия Гагарина, дом 34, Территория "Южный Рынок" (Павильон К-37) `}
    />
  );
}
export default PopupWithContacts;

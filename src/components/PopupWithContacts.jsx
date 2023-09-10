import PopupWithoutForm from "./PopupWithoutForm";

function PopupWithContacts({ isOpen, onClose }) {
  return (
    <PopupWithoutForm
      name="contacts"
      title="Наши Контакты"
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}
export default PopupWithContacts;

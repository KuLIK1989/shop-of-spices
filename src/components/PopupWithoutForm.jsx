function PopupWithoutForm({ name, isOpen, onClose, title }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={onClose}
          className="popup__close-button"
        />
        <h3 className="form__title">{title}</h3>
      </div>
    </div>
  );
}
export default PopupWithoutForm;

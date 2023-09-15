function PopupWithoutForm({ name, isOpen, onClose, title, info}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={onClose}
          className="popup__close-button"
        />
        <h3 className="form__title">{title}</h3>
        <div className="form__info">{info}</div>
        
      </div>
    </div>
  );
}
export default PopupWithoutForm;

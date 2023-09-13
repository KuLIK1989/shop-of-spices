function PopupWithoutForm({ name, isOpen, onClose, title, info, pic }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={onClose}
          className="popup__close-button"
        />
        <h3 className="form__title">{title}</h3>
        <p className="form__info">{info}</p>
        {/* <img className="form__icon" src={pic} alt="" />`` */}
      </div>
    </div>
  );
}
export default PopupWithoutForm;

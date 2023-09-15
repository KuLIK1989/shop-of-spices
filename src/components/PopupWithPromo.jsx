import PopupWithoutForm from "./PopupWithoutForm";

function PopupWithPromo({ isOpen, onClose }) {
  return (
    <PopupWithoutForm
      name="promo"
      isOpen={isOpen}
      onClose={onClose}
      title="Наши акции"
    />
  );
}

export default PopupWithPromo;

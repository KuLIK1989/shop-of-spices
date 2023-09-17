import PopupWithoutForm from "./PopupWithoutForm";

function PopupWithMap({ isOpen, onClose }) {
  return <PopupWithoutForm name="map" title="Как нас найти" isOpen={isOpen} onClose={onClose} />;
}
export default PopupWithMap;

/* eslint-disable jsx-a11y/iframe-has-title */
import PopupWithoutForm from "./PopupWithoutForm";

function PopupWithMap({ isOpen, onClose, info }) {
  return (
    <PopupWithoutForm
      name="map"
      title="Как нас найти"
      isOpen={isOpen}
      onClose={onClose}
      info={
        <>
          <span>
            Пр-т Юрия Гагарина 34 <br />
            Территория "Южный Рынок" (Павильон К-37)
          </span>
          <iframe
            className="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1bb9e61aa99c40a31966a8bce632072d61bfdfaa3a837ff462309e2c0f26e094&amp;source=constructor"
          ></iframe>
        </>
      }
    />
  );
}
export default PopupWithMap;

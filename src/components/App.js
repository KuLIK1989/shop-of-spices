import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import HandleCard from "../utils/HandleCard";
import PopupWithConatcs from "./PopupWithContacts";
import PopupWithPromo from "./PopupWithPromo";
import PopupWithMap from "./PopupWithMap";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  const [isShowPromoPopupOpen, setIsShowPromoPopupOpen] = useState(false);
  const [isShowMapPopupOpen, setIsShowMapPopupOpen] = useState(false);

  function handleShowContacsClick() {
    setIsShowContactsPopupOpen(true);
  }
  function handleShowPromoClick() {
    setIsShowPromoPopupOpen(true);
  }
  function handleShowMapClick() {
    setIsShowMapPopupOpen(true);
  }

  function closeAllPopup() {
    setIsShowContactsPopupOpen(false);
    setIsShowPromoPopupOpen(false);
    setIsShowMapPopupOpen(false);
  }

  return (
    <div className="page">
      <Header
        onContacts={handleShowContacsClick}
        onPromo={handleShowPromoClick}
        onMap={handleShowMapClick}
      />
      <Main />
      <HandleCard />
      <PopupWithConatcs
        isOpen={isShowContactsPopupOpen}
        onClose={closeAllPopup}
      />
      <PopupWithPromo isOpen={isShowPromoPopupOpen} onClose={closeAllPopup} />
      <PopupWithMap isOpen={isShowMapPopupOpen} onClose={closeAllPopup} />
    </div>
  );
}
export default App;

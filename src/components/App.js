import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import HandleCard from "../utils/HandleCard";
import PopupWithConatcs from "./PopupWithContacts";
import PopupWithPromo from "./PopupWithPromo";
import PopupWithMap from "./PopupWithMap";
import { useEffect } from "react";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  const [isShowPromoPopupOpen, setIsShowPromoPopupOpen] = useState(false);
  const [isShowMapPopupOpen, setIsShowMapPopupOpen] = useState(false);

  function handleShowContacsClick() {
    setIsShowContactsPopupOpen(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleShowPromoClick() {
    setIsShowPromoPopupOpen(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleShowMapClick() {
    setIsShowMapPopupOpen(true);
  }

  function closeAllPopup() {
    setIsShowContactsPopupOpen(false);
    setIsShowPromoPopupOpen(false);
    setIsShowMapPopupOpen(false);
  }
  useEffect(() => {
    document.body.addEventListener("mousedown", closeAllPopup);
    return () => {
      document.body.removeEventListener("mousedown", closeAllPopup);
    };
  }, [setIsShowContactsPopupOpen, handleShowPromoClick, handleShowMapClick]);

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

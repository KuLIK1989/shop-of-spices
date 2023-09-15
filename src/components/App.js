import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import HandleCard from "../utils/HandleCard";
import PopupWithConatcs from "./PopupWithContacts";
import PopupWithPromo from "./PopupWithPromo";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  const [isShowPromoPopupOpen, setIsShowPromoPopupOpen] = useState(false);

  function handleShowContacsClick() {
    setIsShowContactsPopupOpen(true);
  }
  function handleShowPromoClick() {
    setIsShowPromoPopupOpen(true);
  }

  function closeAllPopup() {
    setIsShowContactsPopupOpen(false);
    setIsShowPromoPopupOpen(false);
  }

  return (
    <div className="page">
      <Header
        onContacts={handleShowContacsClick}
        onPromo={handleShowPromoClick}
        // onMap={}
      />
      <Main />
      <HandleCard />
      <PopupWithConatcs
        isOpen={isShowContactsPopupOpen}
        onClose={closeAllPopup}
      />
      <PopupWithPromo isOpen={isShowPromoPopupOpen} onClose={closeAllPopup} />
    </div>
  );
}
export default App;

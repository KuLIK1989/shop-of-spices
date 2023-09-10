import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import HandleCard from "../utils/HandleCard";
import PopupWithConatcs from "./PopupWithContacts";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  function handleShowContacsClick() {
    setIsShowContactsPopupOpen(true);
  }
  function closeAllPopup() {
    setIsShowContactsPopupOpen(false);
  }

  return (
    <div className="page">
      <Header
        onContacts={handleShowContacsClick}
        // onPromo={}
        // onMap={}
      />
      <Main />
      <HandleCard />
      <PopupWithConatcs
        isOpen={isShowContactsPopupOpen}
        onClose={closeAllPopup}
      />
    </div>
  );
}
export default App;

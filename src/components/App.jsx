import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PopupWithConatcs from "./PopupWithContacts";
import PopupWithPromo from "./PopupWithPromo";
import Cart from "../pages/Cart";
// import PopupWithMap from "./PopupWithMap";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  const [isShowPromoPopupOpen, setIsShowPromoPopupOpen] = useState(false);
  // const [isShowMapPopupOpen, setIsShowMapPopupOpen] = useState(false);

  function handleShowContacsClick() {
    setIsShowContactsPopupOpen(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleShowPromoClick() {
    setIsShowPromoPopupOpen(true);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleShowMapClick() {
    // setIsShowMapPopupOpen(true);
  }

  function closeAllPopup() {
    setIsShowContactsPopupOpen(false);
    setIsShowPromoPopupOpen(false);
    // setIsShowMapPopupOpen(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={[
            <Header
              onContacts={handleShowContacsClick}
              onPromo={handleShowPromoClick}
              onMap={handleShowMapClick}
            />,
            <Main />,
            <Home />,
          ]}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      <PopupWithConatcs
        isOpen={isShowContactsPopupOpen}
        onClose={closeAllPopup}
      />
      <PopupWithPromo isOpen={isShowPromoPopupOpen} onClose={closeAllPopup} />
      {/* <PopupWithMap isOpen={isShowMapPopupOpen} onClose={closeAllPopup} /> */}
    </div>
  );
}
export default App;

import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
// import HandleCard from "../utils/HandleCard";
import PopupWithConatcs from "./PopupWithContacts";
import PopupWithPromo from "./PopupWithPromo";
// import PopupWithMap from "./PopupWithMap";
import Card from "./Card";
import Skeleton from "./SkeletonReact";

function App() {
  const [isShowContactsPopupOpen, setIsShowContactsPopupOpen] = useState(false);
  const [isShowPromoPopupOpen, setIsShowPromoPopupOpen] = useState(false);
  // const [isShowMapPopupOpen, setIsShowMapPopupOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://657c576c853beeefdb993d3c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  function HandleCard() {
    return (
      <section className="cards">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((props) => <Card key={props.id} props={props} />)}
      </section>
    );
  }

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
  // useEffect(() => {
  //   document.body.addEventListener("mousedown", closeAllPopup);
  //   return () => {
  //     document.body.removeEventListener("mousedown", closeAllPopup);
  //   };
  // }, [setIsShowContactsPopupOpen, handleShowPromoClick, handleShowMapClick]);

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
      {/* <PopupWithMap isOpen={isShowMapPopupOpen} onClose={closeAllPopup} /> */}
    </div>
  );
}
export default App;

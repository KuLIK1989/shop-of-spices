import React from "react";
// import { ueDispatch, useSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addItem, plusItem, minusItem } from "../redux/slices/cartSlice";

const Card = ({ id, price, name, link }) => {
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const adddedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();

  const onClickPlus = () => {
    const item = {
      id,
      name,
      link,
      price,
    };
    dispatch(plusItem(item));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickAdd = () => {
    const item = {
      id,
      name,
      link,
      price,
    };
    dispatch(addItem(item));
  };

  return (
    // передалать по классы по БЭМ
    <div className="card">
      <img className="card__image" src={link} alt={name} />
      <h2 className="card__name">{name} 100г</h2>
      <div className="card__buy">
        <div className="card__weight">
          <button
            onClick={onClickMinus}
            className="card__button-minus"
          ></button>
          <input
            disabled
            className="card__input"
            type="number"
            value={adddedCount}
          />
          <button className="card__button-plus" onClick={onClickPlus}></button>
        </div>
        <button className="card__btn" onClick={onClickAdd}>
          В корзину
        </button>
        <div className="card__sum">{price}₽</div>
      </div>
    </div>
  );
};
export default Card;

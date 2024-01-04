import React from "react";
import { useDispatch } from "react-redux";
import { minusItem, plusItem, removeItem } from "../redux/slices/cartSlice";

const CartItem = ({ id, name, price, link, count }) => {
  const dispatch = useDispatch();
  const clickPlus = () => {
    const item = {
      id,
      name,
      link,
      price,
    };
    dispatch(plusItem(item));
  };
  const clickMinus = () => {
    console.log("сработал клик минус");
    dispatch(minusItem(id));
  };
  const onClickDeleteItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="content__item">
      <div className="content__left-wrapper">
        <div className="content__left">
          <img className="content__pic" src={link} alt="" />
          <div className="content__left-title">
            <div className="content__title">{name}</div>
          </div>
        </div>
      </div>

      <div className="content__wrapper-right">
        <div className="content__amount">Итого {price * count}₽</div>
        <div className="content__quantity">
          <button
            className="content__quantuty-minus"
            onClick={clickMinus}
          ></button>
          <input
            className="content__quantity-input"
            type="text"
            value={count}
          />
          <button
            className="content__quantuty-plus"
            onClick={clickPlus}
          ></button>
        </div>
        <div className="content__price">{price}₽</div>
        <div className="content__cancel-btn" onClick={onClickDeleteItem}></div>
      </div>
    </div>
  );
};
export default CartItem;

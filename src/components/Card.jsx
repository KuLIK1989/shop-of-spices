import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, plusItem, minusItem } from "../redux/slices/cartSlice";

const Card = ({ id, price, name, link }) => {
  const items = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  //Счетчик добавления товара
  const adddedCount = items ? items.count : 0;
  //изменение цены в зависимости от количества добавленного товара
  const addedPrice = price * adddedCount;
  //Изменяет текст внутри кнопки в заивисимости от боавления или не добавления товара
  const initialPrice = addedPrice ? "В корзину" : `${price}₽`;

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
    if (adddedCount > 0) {
      dispatch(minusItem(id));
    } else {
      alert("Вы выбрали минимально допустимое количесвто товара");
    }
  };

  const onClickAdd = () => {
    const item = {
      id,
    };
    dispatch(addItem(item));
  };

  return (
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
            readOnly
          />
          <button className="card__button-plus" onClick={onClickPlus}></button>
        </div>
        <button className="card__btn" onClick={onClickAdd}>
          {initialPrice}
        </button>
        {addedPrice > 0 && <div className="card__sum">{addedPrice}₽</div>}
      </div>
    </div>
  );
};
export default Card;

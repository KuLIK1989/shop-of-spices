import React, { useState } from "react";
// import cart from "../images/cart-shopping-svgrepo-com.svg";

const Card = ({ props }) => {
  const [cartSum, setCartSum] = useState(0);
  const onClickCartPlus = () => {
    setCartSum(cartSum + props.price);
  };
  const onClickCartMinus = () => {
    if (cartSum === 0) {
    } else {
      setCartSum(cartSum - props.price);
    }
  };

  return (
    // передалать по классы по БЭМ
    <div className="card">
      <img className="card__image" src={props.link} alt={props.name} />
      <h2 className="card__name">{props.name} 100г</h2>
      <div className="card__buy">
        <div className="card__weight">
          <button
            onClick={onClickCartMinus}
            className="card__button-minus"
          ></button>
          <input
            className="card__input"
            type="text"
            defaultValue={props.price}
          />
          <button
            onClick={onClickCartPlus}
            className="card__button-plus"
          ></button>
        </div>
        <button className="card__btn">В корзину</button>
        <div className="card__sum">{cartSum}₽</div>
      </div>
    </div>
  );
};
export default Card;

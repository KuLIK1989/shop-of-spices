import React, { useState } from "react";

const Card = ({price, name, link}) => {
  const [cartSum, setCartSum] = useState(price);
  const [quantiy, setQuantity] = useState(1);

  const onClickCartPlus = () => {
    setCartSum(cartSum + price);
    setQuantity(quantiy + 1);
  };
  const onClickCartMinus = () => {
    if (cartSum === 0) {
    } else {
      setCartSum(cartSum - price);
      setQuantity(quantiy - 1);
    }
  };

  return (
    // передалать по классы по БЭМ
    <div className="card">
      <img className="card__image" src={link} alt={name} />
      <h2 className="card__name">{name} 100г</h2>
      <div className="card__buy">
        <div className="card__weight">
          <button
            onClick={onClickCartMinus}
            className="card__button-minus"
          ></button>
          {/* //! указать вэлью в инпуте */}
          <input disabled className="card__input" type="text" value={quantiy} onChange={setQuantity}/>
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

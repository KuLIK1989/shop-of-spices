import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card">
      <img className="card__image" src={props.link} alt={props.name} />
      <h2 className="card__name">{props.name}</h2>
      <p className="card__price">100г\{props.price} &#8381;</p>
      <button className="card__btn">В корзину</button>
    </div>
  );
};
export default Card;

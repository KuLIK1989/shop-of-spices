import React from "react";

const Card = ({ props }) => {
  return (
    <div className="card">
      <img className="card__image" src={props.link} alt={props.name} />
      <h2 className="card__name">{props.name}</h2>
      <button>В корзину</button>
    </div>
  );
};
export default Card;

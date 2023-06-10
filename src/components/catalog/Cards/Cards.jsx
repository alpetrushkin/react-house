import React from 'react';
import ButtonCart from "../../UI/button-cart/ButtonCart";

const Cards = ({distemper, author, name, description, price}) => {
  return (
    <li className="catalog__item">
      <article className="product">
        <picture>
          <img src={distemper} alt="product"/>
        </picture>
        <div className="product__content">
          <span className="product__author">{author}</span>
          <h3 className="product__title">{name}</h3>
          <span className="product__props">{description}</span>
          <div className="product__price">{price} руб</div>
          <ButtonCart title={'В корзину'} />
        </div>
      </article>
    </li>
  );
};

export default Cards;
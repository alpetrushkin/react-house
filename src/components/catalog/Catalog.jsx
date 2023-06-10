import React from 'react';
import ButtonCart from "../UI/button-cart/ButtonCart";

import './catalog.css';

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const sortName = ['Франция', 'Германия', 'Англия'];
  const [activeSort, setActiveSort] = React.useState(0);
  const activeNameSort = sortName.map((el, i) => {
    return (
      <li key={i} className="catalog-tabs__item">
        <button
          onClick={() => setActiveSort(i)}
          className={activeSort === i
            ? "btn-reset catalog-tabs__btn catalog-tabs__btn--active"
            : "btn-reset catalog-tabs__btn"}>
          {el}
        </button>
      </li>
      )
  });

  React.useEffect(() => {
    fetch('http://localhost:3002/france')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data)
      })
  }, [])

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-top">
          <h2 className="catalog-name">Репродукция</h2>
          <ul className="catalog-tabs">
            {activeNameSort}
          </ul>
        </div>

        <div className="catalog-bottom">
          <ul className="catalog-list">
            {item.map(obj => {
              return (
                <li className="catalog__item">
                  <article className="product">
                    <picture>
                      <img src={obj.distemper} alt="product"/>
                    </picture>
                    <div className="product__content">
                      <span className="product__author">{obj.author}</span>
                      <h3 className="product__title">{obj.name}</h3>
                      <span className="product__props">{obj.description}</span>
                      <div className="product__price">{obj.price} руб</div>
                      <ButtonCart title={'В корзину'} />
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
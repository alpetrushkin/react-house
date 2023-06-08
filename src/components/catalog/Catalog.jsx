import React from 'react';
import './catalog.css';
import product1 from "../../assets/images/product/product-1.jpg";
import ButtonCart from "../UI/button-cart/ButtonCart";

const Catalog = () => {
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
  })

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
            <li className="catalog__item">
              <article className="product">
                <picture>
                  <img src={product1} alt="product"/>
                </picture>
                <div className="product__content">
                  <span className="product__author">Марсель Руссо</span>
                  <h3 className="product__title">Охота Амура</h3>
                  <span className="product__props">Холст, масло (50х80) </span>
                  <div className="product__price">14 500 руб</div>
                  <ButtonCart title={'В корзину'} />
                </div>
              </article>
            </li>
            <li className="catalog__item">
              <article className="product">
                <picture>
                  <img src={product1} alt="product"/>
                </picture>
                <div className="product__content">
                  <span className="product__author">Марсель Руссо</span>
                  <h3 className="product__title">Охота Амура</h3>
                  <span className="product__props">Холст, масло (50х80) </span>
                  <div className="product__price">14 500 руб</div>
                  <ButtonCart title={'В корзину'} />
                </div>
              </article>
            </li>
            <li className="catalog__item">
              <article className="product">
                <picture>
                  <img src={product1} alt="product"/>
                </picture>
                <div className="product__content">
                  <span className="product__author">Марсель Руссо</span>
                  <h3 className="product__title">Охота Амура</h3>
                  <span className="product__props">Холст, масло (50х80) </span>
                  <div className="product__price">14 500 руб</div>
                  <ButtonCart title={'В корзину'} />
                </div>
              </article>
            </li>
            <li className="catalog__item">
              <article className="product">
                <picture>
                  <img src={product1} alt="product"/>
                </picture>
                <div className="product__content">
                  <span className="product__author">Марсель Руссо</span>
                  <h3 className="product__title">Охота Амура</h3>
                  <span className="product__props">Холст, масло (50х80) </span>
                  <div className="product__price">14 500 руб</div>
                  <ButtonCart title={'В корзину'} />
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
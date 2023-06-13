import React from 'react';
import ButtonCart from "../UI/button-cart/ButtonCart";

import './catalog.css';
import Cards from "./Cards/Cards";
import Skeleton from "./Skeleton";

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
        setItem(data);
        setIsLoading(false);
      })
      window.scrollTo(0, 0)
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
            {isLoading
            ? ([...new Array(6)].map((_, index) => <Skeleton key={index} />))
            : (item.map((obj, index) => {
                return (
                  <Cards key={index} {...obj} />
                )
              }))
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
import React from 'react';
import ButtonCart from "../UI/button-cart/ButtonCart";

import './catalog.css';
import Cards from "./Cards/Cards";
import Skeleton from "./Skeleton";
import ActiveSort from "./activeSort/ActiveSort";

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeSort, setActiveSort] = React.useState(0);

  React.useEffect(() => {
    fetch('http://localhost:3002/items?locationId=england')
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
          <h3>по цене</h3>
          <ul className="catalog-tabs">
            <ActiveSort value={activeSort} onClickActive={(id) => setActiveSort(id)} />
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
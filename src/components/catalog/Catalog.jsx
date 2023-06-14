import React from 'react';
import Cards from "./Cards/Cards";
import Skeleton from "./Skeleton";
import FilterLocation from "./FilterLocation/FilterLocation";
import Sort from "./Sort/Sort";

import './catalog.css';

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSortName, setActiveSortName] = React.useState(0);

  const [filterLocation, setFilterLocation] = React.useState(0);

  React.useEffect(() => {
    fetch(`http://localhost:3002/items?locationId=${filterLocation}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
      window.scrollTo(0, 0)
  }, [filterLocation])

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-top">
          <h2 className="catalog-name">Репродукция</h2>
          <Sort
            value={activeSortName}
            onClickActiveSort={(id) => setActiveSortName(id)}
          />
          <ul className="catalog-tabs">
            <FilterLocation
              value={filterLocation}
              onClickActive={(id) => setFilterLocation(id)}
            />
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
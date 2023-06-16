import React from 'react';
import Cards from "./Cards/Cards";
import FilterLocation from "./FilterLocation/FilterLocation";
import Sort from "./Sort/Sort";
import './catalog.css';

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterLocation, setFilterLocation] = React.useState(0);
  const [activeSortName, setActiveSortName] = React.useState(
    {name: 'сначала популярные', sortProperty: 'rating'}
  );

  React.useEffect(() => {
    setIsLoading(true);

    const category = filterLocation > 0 ? `locationId=${filterLocation}` : '';
    const order = activeSortName.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = activeSortName.sortProperty.replace('-', '');

    fetch(
      `http://localhost:3002/items?${category}&_sort=${sortBy}&_order=${order}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
    window.scrollTo(0, 0)
  }, [activeSortName, filterLocation]);

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
              ? ([...new Array(6)].map((_, index) => <h1>Loading...</h1>))
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